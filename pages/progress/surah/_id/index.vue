<template>
  <div class="pt-3 pb-5">
    <div class="progress-tile pb-3 text-center">
      <h3>Progress</h3>
    </div>
    <b-container class="mb-3">
      <b-button-group>
        <nuxt-link to="/progress/surah">
          <b-button class="progress-tabs-active">Surah</b-button>
        </nuxt-link>
        <nuxt-link to="/progress/juz">
          <b-button class="progress-tabs">Juz</b-button>
        </nuxt-link>
      </b-button-group>
    </b-container>
    <Base />
  </div>
</template>

<script>
import Base from "../surah_base.vue";

export default {
  components: {
    Base,
  },
};
</script>
