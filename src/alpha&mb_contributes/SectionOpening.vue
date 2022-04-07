<template>
  <v-container class="container" v-on:click="pause_toggle()">
    asdfasdf
    <video @ended="onEnd()" autoplay id="myVideo" ref="myVideo">
      <source src="./section-op/ENNA200k.mp4" type="video/mp4" />
    </video>

    <div class="control_button">
      <div id="audio_controls_div" v-on:click="mute_toggle()">
        <img
          src="./section-op/audio-off.89ea1960.png"
          id="controller__audio__off"
          ref="controller__audio__off"
        />
        <img
          src="./section-op/audio-on.5e57c737.png"
          id="controller__audio__on"
          ref="controller__audio__on"
        />
      </div>
      <button id="mute_button" ref="mute_button" v-on:click="mute_toggle()">UnMuted</button>
      <button id="skip_button" ref="skip_button" style="color: white" v-on:click="redirect2home()">
        SKIP>>>
      </button>
      <button
        id="play_button"
        ref="play_button"
        v-on:click="pause_toggle()"
        :style="{ display: play_btn_click2disappear }"
      >
        Click to Play
      </button>
    </div>
  </v-container>
</template>

<script>
// let video = document.getElementById("myVideo");  // done
let play_button = document.getElementById("play_button");
let mute_button = document.getElementById("mute_button");
let mute_img_off = document.getElementById("controller__audio--off");
let mute_img_on = document.getElementById("controller__audio--on");

export default {
  props: [],
  data: () => ({
    controller__audio__off_Style: "display: none;",
    controller__audio__on_Style: "display: none;",

    play_btn_click2disappear: "",
  }),

  methods: {
    onEnd: function () {
      console.log("vid ended");
      this.redirect2home();
    },

    redirect2home(route) {
      this.$router.push((route = { name: "ViewEnnaHome" }));
    },

    pause_toggle: function () {
      console.log("pause_toggle func triggered");
      this.play_btn_click2disappear = "none";
      var video = this.$refs.myVideo;
      if (video.paused) {
        video.play();
        //   play_button.innerHTML = "Pause";
        // } else {
        //   video.pause();
        //   play_button.innerHTML = "Play";
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

      if (video.muted == false) {
        video.muted = true;
        // mute_button.innerHTML = "Muted";
        // mute_img_on.style = "display: content";
        // mute_img_off.style = "display: none";
      } else {
        video.muted = false;
        // mute_button.innerHTML = "UnMuted";
        // mute_img_on.style = "display: none";
        // mute_img_off.style = "display: content";
      }
    },

    // setTimeout
  },
};
</script>

<style lang="scss" scoped>
div.container {
}

video {
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
  color: #fff;
  cursor: pointer;
}

#skip_button {
  top: 90%;
  left: 90%;
  font-size: 18px;
  padding: 10px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

#play_button {
  bottom: 50%;
  left: 50%;
  font-size: 18px;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
}

button.control_button:hover {
  background: gray;
  color: green;
}
</style>
