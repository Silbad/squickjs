import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        script: {
            defineModel: true
        }
    })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~': fileURLToPath(new URL('./node_modules', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: 'src/library.js',
            name: 'squickjs',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                format: 'es',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
