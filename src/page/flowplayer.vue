<template>
  <div id="container"></div>
</template>

<script>
import flowplayer from "flowplayer";
// import hlsjs from "flowplayer-hlsjs";

export default {
  data() {
    return {
      //
    };
  },
  mounted: function() {
    flowplayer("#container", {
      clip: {
        sources: [
          {
            type: "application/x-mpegurl",
            src:
              "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
          }
        ]
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
