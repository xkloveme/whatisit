<template>
  <div id="testNative"></div>
</template>

<script>
import HJPlayer from "hjplayer";

export default {
  data() {
    return {
      //
    };
  },
  mounted: function() {
    // if (HJPlayer.isSupported()) {
    const oVideo = document.querySelector("#testNative");
    let player = new HJPlayer(
      {
        type: "m3u8",
        url:
          "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
      }
      // {
      //   .type
      // }
    );
    player.attachMediaElement(oVideo);
    player.load();
    player.play();
  }
  // }
};
</script>

<style lang="scss" scoped></style>
