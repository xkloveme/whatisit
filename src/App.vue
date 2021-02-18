<template>
  <div id="app">
    <footer class="footer">
      Copyright © 冀小康 2020 by
      <a href="https://github.com/xkloveme/whatisit" target="_blank"
        >xkloveme</a
      >
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
    <about v-if="view" />
    <!-- <XKvideo  /> -->
    <div v-else>
    <router-view />
    </div>
    
  </div>
</template>

<script>
import about from "./page/about";
// import XKvideo from "./page/newVideo";
import { addListener, lanuch } from "devtools-detector";

export default {
  name: "app",
  components: {
    // XKvideo,
    about
  },
  data() {
    return {
      view: false,
      start: 2
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
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.footer {
  position: fixed;
  bottom: 5px;
  left: 5px;
  right: 5px;
}
</style>
