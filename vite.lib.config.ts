import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'SolidjsOhlcChart',
      fileName: 'solidjs-ohlc-chart',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        globals: { 'solid-js': 'Solid' },
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
});
