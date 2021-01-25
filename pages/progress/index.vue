<template>
  <div class="pt-3 pb-5">
    <div class="progress-tile pb-3 text-center">
      <h3>Progress</h3>
    </div>
    <b-container>
      <b-tabs content-class="mt-3">
        <b-tab title="Surah" active>
          <Surah />
        </b-tab>
        <b-tab title="Juz">
          <Juz />
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import Juz from "./juz-tab.vue";
import Surah from "./surah-tab.vue";

export default {
  components: {
    Juz,
    Surah,
  },
};
</script>

<style>
.progress-tile h3 {
  margin-bottom: 0;
  font-weight: 600;
}

.nav-tabs .nav-link.active {
  color: #000000;
  font-weight: 600;
}

.nav-tabs .nav-link {
  color: #49c0db;
  font-weight: 500;
}
</style>
