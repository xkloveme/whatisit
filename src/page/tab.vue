<template>
  <div class="page_home">
    <Slide right PushRotate ref="sliderMenu" class="home_right">
      <details class="menu" open v-for="(item, i) in TV" :key="i">
        <summary>节目分类{{ i }}</summary>
        <li
          class="right_button"
          v-for="(sub, j) in item"
          :key="j + 1"
          @click="openVideo(sub)"
          :title="sub.url"
        >
          {{ sub.title }}
        </li>
      </details>
    </Slide>
    <main class="home_left" id="page-wrap">
      <a href="https://github.com/xkloveme/whatisit" target="_blank">
        <img
          src="./../assets/logo.png"
          alt="弄啥哩"
          class="Rotation"
          style="margin:30px auto;width:40px;height:40px;border-radius: 100%;filter: grayscale(1);"
        />
      </a>
      <div class="home_title">
        节目:{{ playInfo.title }}
        <div class="home_change_player" @click="changePlayer">切换播放器↑↓</div>
      </div>
      <div v-if="isRouterAlive">
        <player class="home_video" :url="playInfo.url" v-if="change" />
        <hls class="home_video" :url="playInfo.url" v-else />
      </div>
    </main>
  </div>
</template>

<script>
import player from "./player";
import hls from "./hls";
import { Slide } from "vue-burger-menu";
// import axios from "axios";
export default {
  components: {
    player,
    hls,
    Slide
  },
  data() {
    return {
      isRouterAlive: true,
      change: true,
      playInfo: {},
      TV: {}
    };
  },
  mounted() {
    this.getTVList();
  },
  methods: {
    getTVList() {
      fetch("https://www.jixiaokang.com/iptv-m3u/tv.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.TV = data;
        });
    },
    openVideo(info) {
      this.isRouterAlive = false;
      this.playInfo = info;
      this.$refs["sliderMenu"].closeMenu();
      this.$nextTick(() => (this.isRouterAlive = true));
    },
    changePlayer() {
      this.change = !this.change;
    }
    // closeMenu(a) {
    //   console.log("🐛🐛🐛: closeMenu -> a", a);
    // }
  }
};
</script>

<style>
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.page_home {
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.home_title {
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  border-top: 1px solid #ddd;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #fefefe),
    color-stop(1, #cccccc)
  );
}
.home_change_player {
  cursor: pointer;
  font-size: 12px;
  float: left;
}
.home_video {
  position: -webkit-sticky;
  position: sticky;
  width: 100% !important;
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
  top: 0;
  z-index: 1;
}

.Rotation {
  -webkit-transform: rotate(360deg);
  animation: rotation 4s linear infinite;
  -moz-animation: rotation 4s linear infinite;
  -webkit-animation: rotation 4s linear infinite;
  -o-animation: rotation 4s linear infinite;
}
.home_right {
  width: 100%;
  margin: 5px;
  font-size: 20px;
  user-select: none;
}
.bm-item-list {
  color: #000 !important;
  margin-left: 0% !important;
  margin-bottom: 100px;
  border: solid;
}
.right_button {
  cursor: pointer;
  width: 80%;
  margin: 5px 0;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
}
.menu {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.menu:last-child {
  border-bottom: 1px solid #ccc;
}
.menu summary {
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  border-top: 1px solid #ddd;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #fefefe),
    color-stop(1, #cccccc)
  );
  cursor: pointer;
}
.menu summary::-webkit-details-marker {
  display: none;
}
.menu summary:before {
  content: "+";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
}
.menu[open] summary:before {
  content: "-";
}
.right_button:hover {
  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  background-color: #f6f6f6;
}
.right_button:active {
  position: relative;
  top: 1px;
}
</style>
