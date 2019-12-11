<template>
  <div>
    hls:
    <VueXgplayer
      :config="configHls"
      format="hls"
      @player="HlsPlayer = $event"
    ></VueXgplayer>
  </div>
</template>

<script>
import VueXgplayer from "./../components/xgplayer-vue";
// import { movies } from "./../assets/movies.m3u";
export default {
  name: "player",
  components: { VueXgplayer },
  data() {
    return {
      configHls: {
        id: "vs6",
        useHls: true,
        preloadTime: 300,
        // preview: {
        //   uploadEl: uploadDom
        // },
        url:
          "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
      },
      HlsPlayer: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", "./../assets/movies.m3u");
      // xhr.overrideMimeType("audio/x-mpegurl"); // Needed, see below.
      // xhr.onload = this.parse();
      // xhr.send();
      // fetch("./../assets/movies.m3u")
      //   .then(response => {
      //     return response;
      //   })
      //   .then(res => {
      //     console.log(88, res.json());
      //   });
    },
    parse() {}
  }
};
</script>

<style lang="scss" scoped></style>
