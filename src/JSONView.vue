<template>
  <div id="json-view">
    <json-view-item
      id="root-item"
      :data="parsed"
      :maxDepth="maxDepth"
      :styles="customStyles"
      v-on:selected="itemSelected"
      :canSelect="hasSelectedListener"
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
      required: true
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
    build: function(
      key: string,
      val: any,
      depth: number,
      path: string,
      includeKey: boolean
    ): object {
      if (this.isObject(val)) {
        // Build Object
        let children = [];
        for (let [childKey, childValue] of Object.entries(val)) {
          children.push(
            this.build(
              childKey,
              childValue,
              depth + 1,
              includeKey ? `${path}${key}.` : `${path}`,
              true
            )
          );
        }
        return {
          key: key,
          type: "object",
          depth: depth,
          path: path,
          length: children.length,
          children: children
        };
      } else if (this.isArray(val)) {
        // Build Array
        let children = [];
        for (let i = 0; i < val.length; i++) {
          children.push(
            this.build(
              i.toString(),
              val[i],
              depth + 1,
              includeKey ? `${path}${key}[${i}].` : `${path}`,
              false
            )
          );
        }
        return {
          key: key,
          type: "array",
          depth: depth,
          path: path,
          length: children.length,
          children: children
        };
      } else {
        // Build Value
        return {
          key: key,
          type: "value",
          path: includeKey ? path + key : path.slice(0, -1),
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
    },
    itemSelected: function(data: object): void {
      this.$emit("selected", data);
    }
  },
  computed: {
    parsed: function(): object {
      if (typeof this.data === "object") {
        return this.build(this.rootKey, { ...this.data }, 0, "", true);
      }
      return {
        key: this.rootKey,
        type: "value",
        path: "",
        depth: 0,
        value: this.data
      };
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
    },
    hasSelectedListener(): boolean {
      return Boolean(this.$listeners && this.$listeners.selected);
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
