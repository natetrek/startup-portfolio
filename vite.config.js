import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

const markdownWrapperClasses = 'prose max-w-none mx-auto'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    })
  ]
})
