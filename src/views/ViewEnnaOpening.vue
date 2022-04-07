<template>
    <v-app>
      <div class="background"></div>
      <div class="videoContainer">
        <Op />
      </div>
    </v-app>
</template>

<script>
import Op from "../AlphaMb_contributes/SectionOpening.vue";

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
  height: 100%;
  max-height: 100%;
  position: absolute;
  border: 10px solid black;
  padding: 1px;
  overflow: hidden !important; /* Hide scrollbars */
}


</style>