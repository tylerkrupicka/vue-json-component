<template>
  <div class="json-view-item">
    <div v-if="data.type === 'object'">
      <span @click.stop="toggleOpen" :class="classes">{{ data.key }}</span>
      <json-view-item
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
        v-show="open"
      />
    </div>
    <div v-if="data.type === 'array'">
      <span @click.stop="toggleOpen" :class="classes">{{ data.key }}</span>
      <json-view-item
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
        v-show="open"
      />
    </div>
    <div v-if="data.type === 'value'">
      <span class="value-key">{{ data.key }}</span
      >: {{ data.value }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "json-view-item",
  data: function() {
    return {
      open: true
    };
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    toggleOpen: function(): void {
      this.open = !this.open;
    },
    getKey: function(value: any): string {
      if (!isNaN(value.key)) {
        return value.key + ":";
      } else {
        return '"' + value.key + '":';
      }
    }
  },
  computed: {
    classes: function(): object {
      return {
        "data-key": true,
        opened: this.open
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.json-view-item {
  margin-left: 20px;
  padding: 5px;
}

.data-key {
  display: flex;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
}

.data-key.opened::before {
  margin-top: 2px;
  margin-bottom: -4px;
  transform: rotate(90deg);
}

.data-key::before {
  color: #444;
  position: relative;
  left: 15px;
  margin-right: 30px;
  content: "\25b6";
  margin-top: -2px;
}

.value-key {
  margin-left: 15px;
}
</style>
