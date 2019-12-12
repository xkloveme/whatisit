<template>
  <div class="item">
    <div class="player">
      <video-player
        class="vjs-custom-skin"
        :options="playerOptions"
        @ready="playerReadied"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
// custom skin css
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
// videojs
import videojs from "video.js";
window.videojs = videojs;
// hls plugin for videojs6
require("videojs-contrib-hls/dist/videojs-contrib-hls.js");
// export
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        // videojs and plugin options
        height: "360",
        language: "zh",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src:
              "http://js.hls.huya.com/huyalive/29106097-2689446042-11551082794746642432-2789253870-10057-A-0-1_1200.m3u8"
          }
        ],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
      }
    };
  },
  methods: {
    playerReadied(player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls;
      console.log("🐛🐛🐛: playerReadied -> hls", hls);
      player.tech_.hls.xhr.beforeRequest = function(options) {
        // console.log(options)
        return options;
      };
    }
  }
};
</script>
