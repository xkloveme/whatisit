<template>
  <video ref="videoRef" width="800" controls></video>
</template>

<script>
import Hls from "hls.js";

export default {
  data () {
    return {
      //
    };
  },
  mounted: function () {
    var hls = new Hls();
    hls.loadSource(
      "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
    );
    hls.attachMedia(this.$refs.videoRef);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      this.$refs.videoRef.play();
    });
  }
};
</script>

<style lang="scss" scoped></style>
