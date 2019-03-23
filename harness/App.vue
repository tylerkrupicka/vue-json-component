<template>
  <div id="app">
    harness
    <json-view></json-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JSONView from "../src/JSONView.vue";

@Component({
  components: { "json-view": JSONView }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
