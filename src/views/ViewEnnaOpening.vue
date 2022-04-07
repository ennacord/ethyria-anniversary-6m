<template>
  <v-main>
    <v-app>
      <div class="background"></div>
      <div class="videoContainer">
        <Op />
      </div>
    </v-app>
  </v-main>
</template>

<script>
import Op from "@/alpha&mb_contributes/SectionOpening.vue";

export default {
  name: "OpeningView",
  components: {
    Op,
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-color: black;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.videoContainer {
  width: 100%;
  height: auto;
  position: absolute;
  // border: 10px solid green;
}
</style>
