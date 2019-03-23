<template>
  <div id="app">
    harness
    <json-view :data="data"></json-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JSONView from "../src/JSONView.vue";

@Component({
  components: { "json-view": JSONView },
  computed: {
    data: function() {
      const test = {
        first: "level",
        works: true,
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
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
