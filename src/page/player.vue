<template>
  <VueXgplayer :config="configHls" format="hls" refs="player" @player="HlsPlayer = $event"></VueXgplayer>
</template>

<script>
import VueXgplayer from "./../components/xgplayer-vue";
export default {
  name: "player",
  components: { VueXgplayer },
  props: ["url"],
  data () {
    return {
      HlsPlayer: null
    };
  },
  computed: {
    configHls () {
      return {
        id: "vs6",
        useHls: true,
        preloadTime: 3000,
        url:
          this.url ||
          "http://aldirect.hls.huya.com/huyalive/30765679-2504742278-10757786168918540288-3049003128-10057-A-0-1_1200.m3u8"
      };
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      // this.$refs["player"].init();
    },
    parse () { }
  }
};
</script>

<style lang="scss" scoped></style>
