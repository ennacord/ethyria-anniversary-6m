<template>
  <v-container class="section-grid">
    <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-quilt.png" height="90"
            alt="Drawing Board" />
        </h1>
        <h2 class="grey--text text--darken-3 text-center pa-0 ma-0 white-glow">
          Different styles, unique approaches, but the same feeling of appreciation for Enna
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters class="px-16">
      <v-col>
        <v-img
          contain
          max-height="94vh"
          @click="onImgClick"
          :src="this.image"  />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image from '@/assets/enna6m-quilt.png';
import imageFull from '@/assets/enna6m-quilt-full.png';

export default {
  props: [],
  data: () => ({
    image,
  }),
  methods: {
    onImgClick() {
      window.open(imageFull);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
