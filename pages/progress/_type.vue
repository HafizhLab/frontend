<template>
  <div class="pt-3 pb-5">
    <div class="progress-tile pb-3 text-center">
      <h3>Progress 2</h3>
    </div>
    <b-container>
      <b-tabs content-class="mt-3">
        <div v-if="$route.path.endsWith('surah')">
          <b-tab title="Surah" active>
            <Surah />
          </b-tab>
          <b-tab title="Juz">
            <Juz />
          </b-tab>
        </div>
        <div v-else>
          <b-tab title="Surah">
            <Surah />
          </b-tab>
          <b-tab title="Juz" active>
            <Juz />
          </b-tab>
        </div>
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
.hello {
  margin-bottom: 0;
  font-weight: 600;
}
</style>
