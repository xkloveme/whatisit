<template>
  <div class="page_home">
    <div class="home_left">
      <hls />
      <player />
    </div>
    <div class="home_right">
      <details class="menu" close v-for="(item, i) in TV" :key="i">
        <summary> 节目{{ i }}</summary>
        <li
          class="right_button"
          v-for="(sub, j) in item"
          :key="j + 1"
          @click="openVideo(sub)"
        >
          {{ sub.title }}
        </li>
      </details>
    </div>
  </div>
</template>

<script>
import player from "./player";
import hls from "./hls";
import axios from "axios";
export default {
  components: {
    player,
    hls
  },
  data() {
    return {
      change: true,
      play: {},
      TV: {}
    };
  },
  mounted() {
    this.getTVList();
  },
  methods: {
    getTVList() {
      axios.get("tv.json").then(response => {
        console.log(response.data);
        this.TV = response.data;
      });
    },
    openVideo(info) {
      console.log("🐛🐛🐛: openVideo -> info", info);
      this.play = info;
    }
  }
};
</script>

<style scoped>
.page_home {
  display: flex;
  justify-content: flex-start;
}
.home_left {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 500px;
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
  top: 0;
  z-index: 1;
}
.home_right {
  width: 100%;
  margin: 5px;
  user-select: none;
}
.right_button {
  cursor: pointer;
  width: 70%;
  margin: 5px 0;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
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
