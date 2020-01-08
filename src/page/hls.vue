<template>
  <video ref="videoRef" width="800" controls></video>
</template>

<script>
import Hls from "hls.js";

export default {
  props: ["url"],
  // watch: {
  //   url(val) {
  //     var hls = new Hls();
  //     hls.loadSource(val);
  //   }
  // },
  mounted: function() {
    var hls = new Hls();
    hls.loadSource("http://223.110.242.130:6610/gitv/live1/G_CCTV-1-HQ/1.m3u8");
    hls.attachMedia(this.$refs.videoRef);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      this.$refs.videoRef.play();
    });
  }
};
</script>

<style lang="scss" scoped></style>
