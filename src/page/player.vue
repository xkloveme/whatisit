<template>
  <VueXgplayer
    :config="configHls"
    format="hls"
    refs="player"
    @player="HlsPlayer = $event"
  ></VueXgplayer>
</template>

<script>
import VueXgplayer from "./../components/xgplayer-vue";
export default {
  name: "player",
  components: { VueXgplayer },
  props: ["url"],
  data() {
    return {
      HlsPlayer: null
    };
  },
  computed: {
    configHls() {
      return {
        id: "vs6",
        useHls: true,
        preloadTime: 3000,
        url:
          this.url ||
          "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
      };
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // this.$refs["player"].init();
    },
    parse() {}
  }
};
</script>

<style lang="scss" scoped></style>
