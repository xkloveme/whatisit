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
          "http://223.110.242.130:6610/gitv/live1/G_CCTV-1-HQ/1.m3u8"
      };
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$refs["player"].init();
    },
    parse() {}
  }
};
</script>

<style lang="scss" scoped></style>
