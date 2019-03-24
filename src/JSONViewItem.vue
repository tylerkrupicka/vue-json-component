<template>
  <div class="json-view-item">
    <div v-if="data.type === 'object'">
      <span @click.stop="toggleOpen" :class="classes"
        >{{ data.key }}:
        <span class="properties">&nbsp;{{ lengthString }}</span>
      </span>
      <json-view-item
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
        v-show="open"
        :maxDepth="maxDepth"
      />
    </div>
    <div v-if="data.type === 'array'">
      <span @click.stop="toggleOpen" :class="classes"
        >{{ data.key }}:
        <span class="properties">&nbsp;{{ lengthString }}</span>
      </span>
      <json-view-item
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
        v-show="open"
        :maxDepth="maxDepth"
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
      open: this.data.depth < this.maxDepth
    };
  },
  props: {
    data: {
      required: true,
      type: Object
    },
    maxDepth: {
      type: Number,
      required: false,
      default: 10
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
    },
    lengthString: function(): string {
      return this.data.length === 1
        ? this.data.length + " property"
        : this.data.length + " properties";
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
  border-radius: 2px;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  .properties {
    font-weight: 300;
    opacity: 0.6;
    user-select: none;
  }
}

.data-key.opened::before {
  margin-top: 0px;
  margin-bottom: 0px;
  transform: rotate(90deg);
}

.data-key::before {
  color: #444;
  position: relative;
  left: 15px;
  margin-right: 30px;
  user-select: none;
  content: "\25b6";
  margin-top: -2px;
  margin-bottom: 2px;
}

.value-key {
  font-weight: 600;
  margin-left: 15px;
}
</style>
