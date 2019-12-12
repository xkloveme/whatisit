<template>
  <div id="app">
    <!-- <flowPlayer /> -->
    <hls />
    <videoJs />
    <about v-if="view" />
    <player v-else />
  </div>
</template>

<script>
// import encode from "./components/encode.vue";
import player from "./page/player";
import about from "./page/about";
import videoJs from "./page/video";
// import flowPlayer from "./page/flowplayer";
import hls from "./page/hls";
import { addListener, lanuch } from "devtools-detector";

export default {
  name: "app",
  components: {
    player,
    about,
    videoJs,
    hls
    // flowPlayer
  },
  data() {
    return {
      view: false
    };
  },
  mounted() {
    if (!process.env.BABEL_ENV === "development") {
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
  margin-top: 60px;
}
</style>
