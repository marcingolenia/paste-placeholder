import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                background: 'src/main.ts',
                action: 'src/action.ts'
            },
            output: {
                entryFileNames: '[name].js'
              }
        }
    }
})