<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3 text-center">
      <h3>Progress</h3>
    </div>
    <b-container>
      <b-tabs content-class="mt-3">
        <b-tab title="Surah" active>
          <div>
            <b-row>
              <b-col><h5 class="progress-header">Memorized</h5></b-col>
              <b-col>
                <h5 class="progress-header text-right">
                  {{ memo_value }} / {{ memo_max }}
                </h5>
              </b-col>
            </b-row>
            <b-progress
              :value="memo_value"
              :max="memo_max"
              height="18px"
            ></b-progress>
          </div>
          <div class="mt-3 mb-4">
            <b-row>
              <b-col><h5 class="progress-header">Tested</h5></b-col>
              <b-col>
                <h5 class="progress-header text-right">
                  {{ test_value }} / {{ test_max }}
                </h5>
              </b-col>
            </b-row>
            <b-progress
              :value="test_value"
              :max="test_max"
              height="18px"
            ></b-progress>
          </div>
          <hr />
          <b-list-group v-for="surah in surahs" :key="surah.name">
            <b-list-group-item>
              <nuxt-link
                :to="{
                  name: 'surah',
                  params: { name: surah.name },
                }"
              >
                {{ surah.name }}
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-tab>
        <b-tab title="Juz"><p>Juz</p></b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo_value: 38,
      memo_max: 114,
      test_value: 20,
      test_max: 114,
      surahs: [{ name: "Al-Fatihah" }, { name: "Al-Baqarah" }],
    };
  },
};
</script>

<style>
.title h3 {
  margin-bottom: 0;
  font-weight: 600;
}

.nav-tabs .nav-link.active {
  color: #49c0db;
  font-weight: 600;
}

.nav-tabs .nav-link {
  color: #000000;
  font-weight: 500;
}

.progress-bar {
  background-color: #49c0db;
}

.progress {
  border-radius: 20px;
}

.progress-header {
  font-weight: 600;
}
</style>
