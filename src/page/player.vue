<template>
  <VueXgplayer
    :config="configHls"
    format="format"
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
      HlsPlayer: null,
      format: "flv"
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
          "//qingxi.xi-zuida.com/20210214/1225_6874a886/index.m3u8"
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
