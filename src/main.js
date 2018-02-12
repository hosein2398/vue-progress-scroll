import Progress from "./Progress.vue";

const ProgressPlugin = {
  install(Vue) {
    Vue.component("progress-scroll", Progress);
  }
};

export default ProgressPlugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ProgressPlugin);
}