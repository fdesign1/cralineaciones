// vite.config.js
import { defineConfig } from "file:///C:/Users/ferre/Downloads/crdevs/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ferre/Downloads/crdevs/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\ferre\\Downloads\\crdevs";
var vitePort = 3e3;
var vite_config_default = defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      // Custom plugin to handle source map requests
      {
        name: "handle-source-map-requests",
        apply: "serve",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && req.url.endsWith(".map")) {
              const cleanUrl = req.url.split("?")[0];
              req.url = cleanUrl;
            }
            next();
          });
        }
      },
      // Custom plugin to add CORS headers
      {
        name: "add-cors-headers",
        apply: "serve",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
              "Access-Control-Allow-Methods",
              "GET, POST, PUT, DELETE, PATCH, OPTIONS"
            );
            res.setHeader(
              "Access-Control-Allow-Headers",
              "Content-Type, Authorization, X-Requested-With"
            );
            if (req.method === "OPTIONS") {
              res.statusCode = 204;
              return res.end();
            }
            next();
          });
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./client/src")
      }
    },
    root: path.join(process.cwd(), "client"),
    build: {
      outDir: path.join(process.cwd(), "dist"),
      emptyOutDir: true
    },
    clearScreen: false,
    server: {
      hmr: {
        overlay: false
      },
      host: true,
      port: vitePort,
      allowedHosts: true,
      cors: true,
      // Enable CORS in the dev server
      proxy: {
        "/api/": {
          target: "http://localhost:3001",
          changeOrigin: true
        }
      }
    },
    // Enable source maps for development
    css: {
      devSourcemap: true
    },
    // Ensure source maps are properly generated
    esbuild: {
      sourcemap: true
    }
  };
});
export {
  vite_config_default as default,
  vitePort
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmZXJyZVxcXFxEb3dubG9hZHNcXFxcY3JkZXZzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmZXJyZVxcXFxEb3dubG9hZHNcXFxcY3JkZXZzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9mZXJyZS9Eb3dubG9hZHMvY3JkZXZzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpdGVQb3J0ID0gMzAwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCgpLFxyXG4gICAgICAvLyBDdXN0b20gcGx1Z2luIHRvIGhhbmRsZSBzb3VyY2UgbWFwIHJlcXVlc3RzXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaGFuZGxlLXNvdXJjZS1tYXAtcmVxdWVzdHMnLFxyXG4gICAgICAgIGFwcGx5OiAnc2VydmUnLFxyXG4gICAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0IGlzIGZvciBhIHNvdXJjZSBtYXAgZmlsZVxyXG4gICAgICAgICAgICBpZiAocmVxLnVybCAmJiByZXEudXJsLmVuZHNXaXRoKCcubWFwJykpIHtcclxuICAgICAgICAgICAgICAvLyBSZXdyaXRlIHRoZSBVUkwgdG8gcmVtb3ZlIHRoZSBxdWVyeSBzdHJpbmcgdGhhdCdzIGNhdXNpbmcgdGhlIGlzc3VlXHJcbiAgICAgICAgICAgICAgY29uc3QgY2xlYW5VcmwgPSByZXEudXJsLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgICAgICAgcmVxLnVybCA9IGNsZWFuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIEN1c3RvbSBwbHVnaW4gdG8gYWRkIENPUlMgaGVhZGVyc1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2FkZC1jb3JzLWhlYWRlcnMnLFxyXG4gICAgICAgIGFwcGx5OiAnc2VydmUnLFxyXG4gICAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBDT1JTIGhlYWRlcnMgdG8gYWxsIHJlc3BvbnNlc1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcclxuICAgICAgICAgICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgUEFUQ0gsIE9QVElPTlMnLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uLCBYLVJlcXVlc3RlZC1XaXRoJyxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBPUFRJT05TIHJlcXVlc3RzXHJcbiAgICAgICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwNDtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jbGllbnQvc3JjJyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcm9vdDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdjbGllbnQnKSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIG91dERpcjogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkaXN0JyksXHJcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNsZWFyU2NyZWVuOiBmYWxzZSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBobXI6IHtcclxuICAgICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgcG9ydDogdml0ZVBvcnQsXHJcbiAgICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcclxuICAgICAgY29yczogdHJ1ZSwgLy8gRW5hYmxlIENPUlMgaW4gdGhlIGRldiBzZXJ2ZXJcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaS8nOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBkZXZlbG9wbWVudFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBFbnN1cmUgc291cmNlIG1hcHMgYXJlIHByb3Blcmx5IGdlbmVyYXRlZFxyXG4gICAgZXNidWlsZDoge1xyXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlSLFNBQVMsb0JBQW9CO0FBQ3RULE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJbEMsSUFBTSxXQUFXO0FBRXhCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLE1BRU47QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLGdCQUFnQixRQUFRO0FBQ3RCLGlCQUFPLFlBQVksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO0FBRXpDLGdCQUFJLElBQUksT0FBTyxJQUFJLElBQUksU0FBUyxNQUFNLEdBQUc7QUFFdkMsb0JBQU0sV0FBVyxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNyQyxrQkFBSSxNQUFNO0FBQUEsWUFDWjtBQUNBLGlCQUFLO0FBQUEsVUFDUCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLGdCQUFnQixRQUFRO0FBQ3RCLGlCQUFPLFlBQVksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO0FBRXpDLGdCQUFJLFVBQVUsK0JBQStCLEdBQUc7QUFDaEQsZ0JBQUk7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFDQSxnQkFBSTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUdBLGdCQUFJLElBQUksV0FBVyxXQUFXO0FBQzVCLGtCQUFJLGFBQWE7QUFDakIscUJBQU8sSUFBSSxJQUFJO0FBQUEsWUFDakI7QUFFQSxpQkFBSztBQUFBLFVBQ1AsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRixFQUFFLE9BQU8sT0FBTztBQUFBLElBQ2hCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU0sS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVE7QUFBQSxJQUN2QyxPQUFPO0FBQUEsTUFDTCxRQUFRLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyxNQUFNO0FBQUEsTUFDdkMsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxNQUFNO0FBQUE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILGNBQWM7QUFBQSxJQUNoQjtBQUFBO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
