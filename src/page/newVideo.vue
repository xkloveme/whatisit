<template>
  <div>
    <a href="https://github.com/xkloveme/whatisit" target="_blank">
      <img
        src="./../assets/logo.png"
        alt="弄啥哩"
        class="Rotation"
        style="
          margin: 30px auto;
          width: 40px;
          height: 40px;
          border-radius: 100%;
          filter: grayscale(1);
        "
      />
    </a>
    <div class="display-list">
      <div class="button-list button-list1">
        <a href="http://www.zuidazy.com/" title="最大资源网" target="_blank">最大资源网</a>
      </div>
      <div class="button-list button-list2">
        <a href="http://www.yongjiuzy.com/" title="永久资源网" target="_blank">永久资源网</a>
      </div>
       <div class="button-list button-list3">
        <a href="http://www.156zy.me/" title="209资源网" target="_blank">209资源网</a>
      </div>
    </div>

    <div v-if="active">
      <!-- <player class="home_video" :url="playInfo.url" /> -->
      <hls class="home_video" :url="playInfo.url" />
    </div>
  </div>
</template>

<script>
// import player from "./player";
import hls from './hls'
export default {
  components: { hls },
  data() {
    return {
      active: true,
      playInfo: {
        url: '//qingxi.xi-zuida.com/20210214/1225_6874a886/index.m3u8',
      },
    }
  },
  mounted() {
    console.log(
      '🐛: ~ file: newVideo.vue ~ line 39 ~ $route ~ to, from',
      this.$route
    )
    if (this.$route.query.url) {
      this.active = false
      this.playInfo.url = this.$route.query.url
      window.title = this.$route.query.name || '小康之家'
      this.$nextTick(() => {
        this.active = true
      })
    }
  },
}
</script>

<style scoped>
.display-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.button-list {
  padding: 3px 15px;
  margin: 5px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 0.5s ease, transform 0.2s ease;
  will-change: transform;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.button-list1 {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
} 
.button-list2 {
  background: linear-gradient(135deg, #4481eb, #04befe);
}
.button-list3 {
  background: linear-gradient(135deg, #ff0844, #ffb199);
}
</style>