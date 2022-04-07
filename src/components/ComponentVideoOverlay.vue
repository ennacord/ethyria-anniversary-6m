<template>

  <v-container class="container" v-on:click="pause_toggle()">
      <div class="background"></div>
      <div class="videoContainer"></div>
  
    <video  autoplay id="myVideo" ref="myVideo">
      <source src="../assets/video/ENNA200k.mp4" type="video/mp4" />
    </video>

    <div class="control_button">
      <div id="audio_controls_div" v-on:click="mute_toggle()">
        <img
          v-bind:src="mute_btn_bool ? mute_btn_src[0] : mute_btn_src[1]"
          id="controller__audio"
          ref="controller__audio"
        />
      </div>
      
      <button
        id="play_button"
        ref="play_button"
        v-on:click="pause_toggle()"
        :style="{ display: play_btn_click2disappear }"
      >
        Click anywhere to Play
      </button>
    </div>
  </v-container>

</template>


<script>
export default {
  name: "videoOverlay",
  props: [],
  data: () => ({
    mute_btn_src: [
      require("../assets/video/audio-on.5e57c737.png"),
      require("../assets/video/audio-off.89ea1960.png"),
    ],
    mute_btn_txt: ["UnMuted", "Muted"],
    mute_btn_bool: true,

    play_btn_click2disappear: "",
  }),

  methods: {
    

    pause_toggle: function () {
      console.log("pause_toggle func triggered");
      this.play_btn_click2disappear = "none";
      var video = this.$refs.myVideo;
      if (video.paused) {
        video.play();
      }
    },

    mute_toggle: function () {
      var video = this.$refs.myVideo;

      let mute_img_off = this.$refs.controller__audio__off; //why i use let?
      let mute_img_on = this.$refs.controller__audio__on;

      console.log("mute_toggle func triggered");
      console.log(video);
      console.log(mute_img_on);
      console.log(mute_img_off);
      this.mute_btn_bool = !this.mute_btn_bool;

      if (video.muted == false) {
        video.muted = true;
      } else {
        video.muted = false;
      }
    },

    // setTimeout
  },
};
</script>

<style lang="scss" scoped>

.videoContainer {
  width: 100%;
  height: auto;
  position: absolute;
  // border: 10px solid green;
}

video {
  top: 0%;
  box-sizing: border-box;
  width: 100%;
  height: 95%;
  margin: 0;
  padding: 0;
}

.control_button button {
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  position: absolute;
}

#audio_controls_div {
  position: absolute;
  top: 0%;
  left: 0%;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}

#mute_button {
  top: 90%;
  left: 0%;
  font-size: 18px;
  padding: 10px;
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
  position: relative;
}


#play_button {
  top: 30%;
  left: 50%;
  font-size: 15px;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  transform: translate(-50%,-50%,);
}

button.control_button:hover {
  background: gray;
  color: green;
}
</style>
