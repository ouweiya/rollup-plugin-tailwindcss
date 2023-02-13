## Install

```console
npm i @ouweiya/rollup-plugin-tailwindcss -D
```

## Usage

**rollup.config.js**

```js
import tailwindcss from '@ouweiya/rollup-plugin-tailwindcss';

export default {
  ...
  plugins: [tailwindcss({ patterns: 'index.css', rootDir: 'src' })],
};
```

## Configuration

```js
tailwindcss({
  rootDir: 'src',
  patterns: 'index.css',
  name: 'customName.css',
});
```

**`rootDir`**

Type: `string`

default: `Root directory`

**`patterns`**

Type: `string`

required: `true`

**`name`**

Type: `string`

default: `patterns`

## postcss.config.js

Use the ES module for the configuration file and add `"type": "module"` in package.json.

Minimize CSS code after compiling tailwindcss.

```js
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,
    cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
  ],
};
```

# Dev and Prod

```js
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

const isDevelopment = process.argv.some(arg => /--watch|-w|dev-server/.test(arg));

const plugins = isDevelopment
  ? [tailwindcss]
  : [tailwindcss, cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })];

export default {
  plugins,
};
```