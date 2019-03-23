<template>
  <div class="json-view-item">
    <div v-if="data.type === 'object'">
      <span class="data-key opened">{{ data.key }}</span>
      <json-view-item
        class="item"
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
      />
    </div>
    <div v-if="data.type === 'array'">
      <span class="data-key">{{ data.key }}</span>
      <json-view-item
        class="item"
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
      />
    </div>
    <div v-if="data.type === 'value'">{{ data.key }}: {{ data.value }}</div>
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
    getKey: function(value: any): string {
      if (!isNaN(value.key)) {
        return value.key + ":";
      } else {
        return '"' + value.key + '":';
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.item {
  padding: 2px 0px 2px 20px;
}
.data-key {
  display: flex;
  align-items: center;
  line-height: 30px;
}

.data-key.opened::before {
  margin-top: 2px;
  transform: rotate(90deg);
}
.data-key::before {
  color: #444;
  content: "\25b6";
  font-size: 12px;
  margin-top: -2px;
  transition: transform 0.1s ease;
}
</style>
