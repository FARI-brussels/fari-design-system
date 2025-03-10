import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { existsSync, readdirSync, rmSync } from 'fs'
import VueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'


emptyDir(resolve(__dirname, 'dist'))
emptyDir(resolve(__dirname, 'types'))

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    dts({
      copyDtsFiles: true,
      outDir: [
        'dist',
        'types'
      ],
      // include: ['src/index.ts'],
      exclude: ['src/ignore'],
      // staticImport: true,
      // rollupTypes: true,
      insertTypesEntry: true,
      compilerOptions: {
        declarationMap: true
      },
      rollupConfig: {
        docModel: {
          enabled: true,
          apiJsonFilePath: '<projectFolder>/docs/<unscopedPackageName>.api.json'
        }
      }
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FariDesignSystem',

      fileName: (format) => `fari-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }

  },
})

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    rmSync(resolve(dir, file), { recursive: true, force: true })
  }
}