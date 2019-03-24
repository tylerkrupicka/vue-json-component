# vue-json-component

[![npm version](https://badge.fury.io/js/vue-json-component.svg)](https://badge.fury.io/js/vue-json-component)

A collapsable tree view for JSON. This package is loosely based on [vue-json-tree-view](https://github.com/michaelfitzhavey/vue-json-tree-view) with a series of upgrades. I'm not contributing this back to that package because it would require breaking API changes, and I don't have 100% feature parity yet.

![image](https://user-images.githubusercontent.com/5761061/54875519-0d133b80-4dbe-11e9-826e-2e9048f9b1da.png)

## Philosophy

This package has two major improvements over predecessors: builds and customization. For builds, this package ships CommonJS, Module, and Minified builds with limited external dependencies. [vue-json-tree-view](https://github.com/michaelfitzhavey/vue-json-tree-view) bundles in lodash making it very bloated. I also export both global and local Vue imports, and overall drastically slimmed down the code in this component.

The styles in this package are all scoped, with key colors still being customizable. There are no extra margins or overflow rules and text properties are all inherited from the page. This makes the view much easier to integrate anywhere you need it.

## Usage

### Import Locally

```js
import { JSONView } from "vue-json-component";
export default Vue.extend({
  components: { "json-view": JSONView }
});
```

### Import Globally

```js
import JSONView from "vue-json-component";
Vue.use(JSONView)
```

### Use

```js
<template>
  <json-view :data="data" />
</template>

```

### Customize

The font size and font family are inherited from the page.

#### Props

* **data** (JSON): The valid JSON object you want rendered as a tree.
* **rootKey** (String): The name of the top level root key; defaults to root.
* **maxDepth** (Number): Depth of the tree that is open at first render; defaults to 1.
* **styles** (Object): Override the color styles. Defaults shown below.

```js
const defaultStyles = {
  key: "#002b36",
  valueKey: "#073642",
  string: "#268bd2",
  number: "#2aa198",
  boolean: "#cb4b16",
  null: "#6c71c4"
};
```

### Example
```js
<template>
  <json-view
    :data="data"
    rootKey="view"
    :maxDepth="1"
    :styles="{ key: '#0977e6' }"
  />
</template>
```

## Development

### Install

```bash
yarn install
```

### Hot-Reload Hostapp

```bash
yarn serve
```

### Build Component

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```
