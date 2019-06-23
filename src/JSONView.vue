<template>
  <div id="json-view">
    <json-view-item
      id="root-item"
      :data="parsed"
      :maxDepth="maxDepth"
      :styles="customStyles"
    />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import JSONViewItem from "./JSONViewItem.vue";

export default Vue.extend({
  name: "json-view",
  props: {
    data: {
      required: true,
      type: Object
    },
    rootKey: {
      type: String,
      required: false,
      default: "root"
    },
    maxDepth: {
      type: Number,
      required: false,
      default: 1
    },
    styles: {
      type: Object,
      required: false
    }
  },
  components: {
    "json-view-item": JSONViewItem
  },
  methods: {
    build: function(key: string, val: any, depth: number): object {
      if (this.isObject(val)) {
        // Build Object
        let children = [];
        for (let [childKey, childValue] of Object.entries(val)) {
          children.push(this.build(childKey, childValue, depth + 1));
        }
        return {
          key: key,
          type: "object",
          depth: depth,
          length: children.length,
          children: children
        };
      } else if (this.isArray(val)) {
        // Build Array
        let children = [];
        for (let i = 0; i < val.length; i++) {
          children.push(this.build(i.toString(), val[i], depth + 1));
        }
        return {
          key: key,
          type: "array",
          depth: depth,
          length: children.length,
          children: children
        };
      } else {
        // Build Value
        return {
          key: key,
          type: "value",
          depth: depth,
          value: val
        };
      }
    },
    isObject: function(val: any): boolean {
      return typeof val === "object" && val !== null && !this.isArray(val);
    },
    isArray: function(val: any): boolean {
      return Array.isArray(val);
    }
  },
  computed: {
    parsed: function(): object {
      return this.build(this.rootKey, { ...this.data }, 0);
    },
    customStyles: function(): object {
      const target = {
        key: "#002b36",
        valueKey: "#073642",
        string: "#268bd2",
        number: "#2aa198",
        boolean: "#cb4b16",
        null: "#6c71c4",
        arrowSize: "6px"
      };
      return Object.assign(target, this.styles);
    }
  }
});
</script>

<style lang="scss">
#json-view {
  width: 100%;
  height: auto;
}
#root-item {
  margin-left: 0;
}
</style>
