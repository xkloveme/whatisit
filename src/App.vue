<template>
  <div id="app">
    <about v-if="view" />
    <tab v-else />
    <footer class="footer">
      Copyright © 冀小康 2020 Theme by
      <a href="https://github.com/xkloveme/whatisit">xkloveme</a>
      <iframe
        style="margin-left: 2px; margin-bottom:-5px;"
        frameborder="0"
        scrolling="0"
        width="91px"
        height="20px"
        src="https://ghbtns.com/github-btn.html?user=xkloveme&repo=whatisit&type=star&count=true"
      >
      </iframe>
    </footer>
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
      view: true,
      start: 2
    };
  },
  mounted() {
    if (process.env.BABEL_ENV !== "development") {
      addListener(isOpen => {
        this.view = isOpen;
      });
      lanuch();
    } else {
      this.view = false;
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
.footer {
  position: fixed;
  bottom: 5px;
  left: 5px;
  right: 5px;
}
</style>
