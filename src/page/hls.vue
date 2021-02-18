<template>
  <div id="videoRef" width="800" controls></div>
</template>

<script>
// import Hls from "hls.js";
import 'xgplayer'
import HlsJsPlayer from 'xgplayer-hls.js'

export default {
  props: ['url'],
  // watch: {
  //   url(val) {
  //     // var hls = new Hls();
  //     // hls.loadSource(val);
  //     // hls.attachMedia(this.$refs.videoRef);
  //     // hls.on(Hls.Events.MANIFEST_PARSED, function() {
  //     //   this.$refs.videoRef.play();
  //     // });
  //   }
  // },
  mounted: function () {
    new HlsJsPlayer({
      id: 'videoRef',
      url: this.url||'//qingxi.xi-zuida.com/20210214/1225_6874a886/index.m3u8',
      useHls: true,
      playsinline: true,
      whitelist: [''],
      fluid: true,
      playbackRate: [1, 1.2, 1.5, 2, 2.5, 3, 3.5, 4, 5, 10],
      download: false,
      pip: false,
      "rotate": {
				"clockwise": false,
				"innerRotate": false
		},
		"closeVideoClick": true,
		"closeVideoDblclick": true,
		"closeVideoTouch": true,
		"keyShortcut": "off",
		"x5-video-player-fullscreen": "false"
    })
    // hls.loadSource(
    //   this.url ||
    //     "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
    // );
    // hls.attachMedia(this.$refs.videoRef);
    // hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //   this.$refs.videoRef.play();
    // });
  },
}
</script>

<style lang="scss" scoped></style>
