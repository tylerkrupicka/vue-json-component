import JSONView from "./JSONView.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component("json-view", JSONView);
  }
};

export { JSONView };