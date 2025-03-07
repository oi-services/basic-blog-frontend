import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'development'
      ? [
          visualizer({
            emitFile: true,
            filename: 'stats.html',
            open: true,
          }) as PluginOption,
        ]
      : []),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
}));
