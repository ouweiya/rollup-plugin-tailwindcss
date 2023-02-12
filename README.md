## Install

```cli
npm i @ouweiya/rollup-plugin-tailwindcss
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
