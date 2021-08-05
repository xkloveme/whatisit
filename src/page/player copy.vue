<template>
<div class="iw-video-box">
    <video-player
        v-if="playerOptions.sources[0].src"
        class="video-css"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @canplay="onPlayerCanplay($event)"
        @ended="onPlayerEnded($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @pause="onPlayerPause($event)"
    ></video-player>
 </div>
</template>

<script>
import VueXgplayer from './../components/xgplayer-vue'
export default {
  name: 'player',
  components: { VueXgplayer },
  data() {
    return {
      HlsPlayer: null,
      url: '',
      format: 'flv',
      active: false,
    }
  },
  computed: {
    configHls() {
      return {
        id: 'vs6',
        useHls: true,
        preloadTime: 3000,
        url:
          this.url ||
          'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/8f8ab07f-a07b-419d-b6a9-85be9bd33f67.mov',
      }
    },
  },
  mounted() {
    if (this.$route.query.format) {
      this.format = this.$route.query.format
    }
    if (this.$route.query.url) {
      this.active = false
      this.url = this.$route.query.url
      window.title = this.$route.query.name || '小康之家'
      this.title = this.$route.query.name || '小康之家'
    }
    console.log(
        '🐛 ~ file: player.vue ~ line 52 ~ getData ~ this.$ref',
        this.$refs['player']
      )
    this.$nextTick(() => {
      this.active = true
      this.getData()
    })
  },
  methods: {
    getData() {
      console.log(
        '🐛 ~ file: player.vue ~ line 52 ~ getData ~ this.$ref',
        this.$refs['player']
      )
      this.$refs['player'].init()
    },
    parse() {},
  },
}
</script>

<style lang="scss" scoped></style>
