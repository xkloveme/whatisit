<template>
  <div id="videoRef" width="800" controls></div>
</template>

<script>
// import Hls from "hls.js";
import 'xgplayer'
import HlsJsPlayer from 'xgplayer-hls.js'

export default {
  data() {
    return {
      active: false,
      url: '',
      title: '',
    }
  },
  mounted: function () {
    if (this.$route.query.format) {
      this.format = this.$route.query.format
    }
    if (this.$route.query.url) {
      this.active = false
      this.url = this.$route.query.url
      window.title = this.$route.query.name || '小康之家'
    }
    new HlsJsPlayer({
      id: 'videoRef',
      url:
        this.url ||
        'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/8f8ab07f-a07b-419d-b6a9-85be9bd33f67.mov',
      useHls: false,
      playsinline: true,
      whitelist: [''],
      fluid: true,
      playbackRate: [1, 1.2, 1.5, 2, 2.5, 3, 3.5, 4, 5, 10],
      download: false,
      pip: false,
      closeVideoClick: true,
      closeVideoDblclick: true,
      closeVideoTouch: true,
      keyShortcut: 'on',
      'x5-video-player-fullscreen': 'false',
    })
  },
}
</script>

<style lang="scss" scoped></style>
