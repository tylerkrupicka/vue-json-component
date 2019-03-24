<template>
  <div id="app">
    harness
    <json-view
      :data="data"
      rootKey="view"
      :maxDepth="1"
      :styles="{ key: '#0977e6' }"
    ></json-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JSONView from "../src/JSONView.vue";

export default Vue.extend({
  components: { "json-view": JSONView },
  computed: {
    data: function() {
      const test = {
        first: "level",
        works: true,
        number: 100,
        missing: null,
        list: [
          "fun",
          {
            object: {
              worst: true
            }
          }
        ],
        object: {
          worst: "nightmare"
        }
      };
      return test;
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.03);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
