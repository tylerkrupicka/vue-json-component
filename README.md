# vue-json-view

A collapsable tree view for JSON. 

![image](https://user-images.githubusercontent.com/5761061/54875519-0d133b80-4dbe-11e9-826e-2e9048f9b1da.png)

## Usage

### Import

```js
import JSONView from "../src/JSONView.vue";
export default Vue.extend({
  components: { "json-view": JSONView }
});
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
