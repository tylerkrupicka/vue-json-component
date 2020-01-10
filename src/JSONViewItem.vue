<template>
  <div class="json-view-item">
    <!-- Handle Objects and Arrays-->
    <div v-if="data.type === 'object' || data.type === 'array'">
      <button
        @click.stop="toggleOpen"
        class="data-key"
        :aria-expanded="open ? 'true' : 'false'"
      >
        <div :class="classes"></div>
        {{ data.key }}:
        <span class="properties">{{ lengthString }}</span>
      </button>
      <json-view-item
        v-on:selected="bubbleSelected"
        v-for="child in data.children"
        :key="getKey(child)"
        :data="child"
        v-show="open"
        :maxDepth="maxDepth"
        :canSelect="canSelect"
      />
    </div>
    <!-- Handle Leaf Values -->
    <div
      :class="valueClasses"
      v-on:click="clickEvent(data)"
      @keyup.enter="clickEvent(data)"
      @keyup.space="clickEvent(data)"
      :role="canSelect ? 'button' : undefined"
      :tabindex="canSelect ? '0' : undefined"
      v-if="data.type === 'value'"
    >
      <span class="value-key">{{ data.key }}:</span>
      <span :style="getValueStyle(data.value)">
        {{ dataValue }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

export interface SelectedData {
  key: string;
  value: string;
  path: string;
}

export interface Data {
  [key: string]: string;
}

export default Vue.extend({
  name: 'json-view-item',
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
      default: 1
    },
    canSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggleOpen: function(): void {
      this.open = !this.open;
    },
    clickEvent: function(data: Data): void {
      this.$emit('selected', {
        key: data.key,
        value: data.value,
        path: data.path
      } as SelectedData);
    },
    bubbleSelected: function(data: Data): void {
      this.$emit('selected', data);
    },
    getKey: function(value: any): string {
      if (!isNaN(value.key)) {
        return value.key + ':';
      } else {
        return '"' + value.key + '":';
      }
    },
    getValueStyle: function(value: any): object {
      const type = typeof value;
      switch (type) {
        case 'string':
          return { color: 'var(--vjc-string-color)' };
        case 'number':
          return { color: 'var(--vjc-number-color)' };
        case 'boolean':
          return { color: 'var(--vjc-boolean-color)' };
        case 'object':
          return { color: 'var(--vjc-null-color)' };
        case 'undefined':
          return { color: 'var(--vjc-null-color)' };
        default:
          return { color: 'var(--vjc-valueKey-color)' };
      }
    }
  },
  computed: {
    classes: function(): object {
      return {
        'chevron-arrow': true,
        opened: this.open
      };
    },
    valueClasses: function(): object {
      return {
        'value-key': true,
        'can-select': this.canSelect
      };
    },
    lengthString: function(): string {
      if (this.data.type === 'array') {
        return this.data.length === 1
          ? this.data.length + ' element'
          : this.data.length + ' elements';
      }
      return this.data.length === 1
        ? this.data.length + ' property'
        : this.data.length + ' properties';
    },
    dataValue: function(): string {
      if (typeof this.data.value === 'undefined') {
        return 'undefined';
      }
      return JSON.stringify(this.data.value);
    }
  }
});
</script>

<style lang="scss" scoped>
.json-view-item:not(.root-item) {
  margin-left: 15px;
}

.value-key {
  color: var(--vjc-valueKey-color);
  font-weight: 600;
  margin-left: 10px;
  border-radius: 2px;
  white-space: nowrap;
  padding: 5px 5px 5px 10px;

  &.can-select {
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:focus {
      outline: 2px solid var(--vjc-hover-color);
    }
  }
}

.data-key {
  // Button overrides
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: transparent;
  width: 100%;

  // Normal styles
  color: var(--vjc-key-color);
  display: flex;
  align-items: center;
  border-radius: 2px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  padding: 5px;

  &:hover {
    background-color: var(--vjc-hover-color);
  }

  &:focus {
    outline: 2px solid var(--vjc-hover-color);
  }

  &::-moz-focus-inner {
    border: 0;
  }

  .properties {
    font-weight: 300;
    opacity: 0.9;
    margin-left: 4px;
    user-select: none;
  }
}

.chevron-arrow {
  flex-shrink: 0;
  border-right: 4px solid var(--vjc-arrow-color);
  border-bottom: 4px solid var(--vjc-arrow-color);
  width: var(--vjc-arrow-size);
  height: var(--vjc-arrow-size);
  margin-right: 20px;
  margin-left: 5px;
  transform: rotate(-45deg);

  &.opened {
    margin-top: -3px;
    transform: rotate(45deg);
  }
}
</style>
