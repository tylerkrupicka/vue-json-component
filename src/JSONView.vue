<template>
  <div id="json-view">
    <br />
    <json-view-item :data="parsed" :maxDepth="maxDepth" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JSONViewItem from "./JSONViewItem.vue";

export default Vue.extend({
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
      default: 10
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
    }
  }
});
</script>

<style lang="scss"></style>
