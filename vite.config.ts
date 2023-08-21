import type { UserConfig, ConfigEnv } from "vite";
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
import { loadEnv } from "vite";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, root, "");

  return {
    root,
    plugins: [vue()],
    server: {
      host: "0.0.0.0",
      open: true,
      port: 3000,
      proxy: {
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        [env.VITE_BASEURL]: {
          target: env.VITE_IP,
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VITE_BASEURL, ""),
          // rewrite: (path) => path.replace(/^\/dev-api/, "")
        },
      },
    },
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js",
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/",
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
      ],
    },
  }
}
