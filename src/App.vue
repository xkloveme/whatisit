<template>
  <div id="app">
    <about v-if="view" />
    <tab v-else />
  </div>
</template>

<script>
import about from "./page/about";
import tab from "./page/tab";
import { addListener, lanuch } from "devtools-detector";

export default {
  name: "app",
  components: {
    tab,
    about
  },
  data() {
    return {
      view: false
    };
  },
  mounted() {
    if (process.env.BABEL_ENV !== "development") {
      addListener(isOpen => {
        this.view = isOpen;
      });
      lanuch();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
