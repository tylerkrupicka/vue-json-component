<template>
  <div id="app">
    <json-view
      :data="data"
      rootKey="view"
      :maxDepth="1"
      :styles="{ key: '#0977e6' }"
      v-on:selected="itemSelected"
    ></json-view>
    <h5>Events</h5>
    <div v-for="(event, index) in events" :key="index">{{ event }}</div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import JSONView from "../src/JSONView.vue";

export default Vue.extend({
  data: function() {
    return {
      events: []
    };
  },
  components: { "json-view": JSONView },
  methods: {
    itemSelected: function(data: any): void {
      // @ts-ignore
      this.events.push(`Selected: ${data.path} with value ${data.value}`);
    }
  },
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
            test: {
              passed: true
            }
          }
        ],
        object: {
          working: "properly"
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
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
