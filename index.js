import path from 'node:path';
import postcss from 'postcss';
import { readFile } from 'node:fs/promises';
import postcssConfig from 'postcss-load-config';

export default function pluginTailwindcss({ patterns, name, rootDir = process.cwd() }) {
  if (!patterns) throw new Error('patterns is required');
  const filePath = path.resolve(rootDir, patterns);

  return {
    name: 'rollup-plugin-tailwindcss',
    async buildStart() {
      this.addWatchFile(filePath);
    },

    async generateBundle() {
      const config = await postcssConfig();
      const css = await readFile(filePath, 'utf-8');
      const result = await postcss(config.plugins).process(css, { from: filePath, to: filePath });

      this.emitFile({
        type: 'asset',
        fileName: name || patterns,
        source: result.css,
      });
    },
  };
}
