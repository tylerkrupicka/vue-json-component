<template>
  <div id="app">
    <div :class="{ tree: true, dark: dark }">
      <json-view
        :data="data"
        rootKey="view"
        :maxDepth="1"
        :styles="{ key: '#0977e6' }"
        :colorScheme="colorScheme"
        v-on:selected="itemSelected"
        :selection="selectedItems"
      ></json-view>
      <json-view
        rootKey="string"
        data="Not an object"
        :colorScheme="colorScheme"
      />
      <json-view
        rootKey="customization"
        data="Using CSS Variables"
        class="customize"
        :colorScheme="colorScheme"
      />
    </div>

    <button id="darkButton" v-on:click="toggleDark">Toggle Dark Mode</button>
    <h5>Events</h5>
    <div v-for="(event, index) in events" :key="index">{{ event }}</div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import JSONView from '../src/JSONView.vue';

export default Vue.extend({
  data: function() {
    return {
      events: [],
      dark: false,
      selectedItems: []
    };
  },
  components: { 'json-view': JSONView },
  methods: {
    itemSelected: function(data: any): void {
      // @ts-ignore
      this.events.push(`Selected: ${data.path} with value ${data.value}`);
      this.selectedItems.push(data.path);
    },
    toggleDark: function(): void {
      this.dark = !this.dark;
    }
  },
  computed: {
    data: function() {
      const test = {
        first: 'level',
        works: true,
        number: 100,
        missing: null,
        undefined: undefined,
        list: [
          'fun',
          {
            test: {
              passed: true
            }
          }
        ],
        object: {
          working: 'properly'
        }
      };
      return test;
    },
    colorScheme: function(): string {
      return this.dark ? 'dark' : 'light';
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  padding: 20px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

#darkButton {
  margin-top: 20px;
  width: 150px;
  height: 30px;
  cursor: pointer;
}

.tree {
  padding: 5px;
}

.tree.dark {
  background-color: #121212;
  border-radius: 4px;
}
</style>

<style lang="scss" scoped>
.customize {
  --vjc-valueKey-color: green;
}
.customize.dark {
  --vjc-valueKey-color: red;
}
</style>
