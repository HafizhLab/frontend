<template>
  <div>
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
      <b-container>
        <b-row class="mb-2">
          <b-col><h5 class="progress-header my-auto">Memorized</h5></b-col>
          <b-col>
            <h6 class="progress-header text-right my-auto">
              {{ memo_value }} / {{ max }}
            </h6>
          </b-col>
        </b-row>
        <b-progress
          :value="memo_value"
          :max="max"
          height="18px"
          class="memo-progress-bar"
        >
        </b-progress>
        <div class="mt-3 mb-4">
          <b-row class="mb-2">
            <b-col><h5 class="progress-header my-auto">Tested</h5></b-col>
            <b-col>
              <h6 class="progress-header text-right my-auto">
                {{ test_value }} / {{ max }}
              </h6>
            </b-col>
          </b-row>
          <b-progress
            :value="test_value"
            :max="max"
            height="18px"
            class="test-progress-bar"
          ></b-progress>
        </div>
        <hr />
        <b-list-group v-for="(surah, index) in surahs" :key="surah.name">
          <b-list-group-item>
            <b-row align-v="center">
              <b-col cols="10">
                <nuxt-link
                  :to="`/progress/surah/${surah.name}`"
                  class="surah-list"
                >
                  <section class="surah-number mr-2">{{ index }}</section>
                  {{ surah.name }}
                </nuxt-link>
              </b-col>
              <b-col class="text-right">
                <b-button disabled class="btn-circle memo-circle">
                  {{ Math.round((surah.memo / surah.max) * 100 * 10) / 10 }}%
                </b-button>
                <b-button disabled class="btn-circle test-circle">
                  {{ Math.round((surah.test / surah.max) * 100 * 10) / 10 }}%
                </b-button>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-container>
    </div>
  </div>
</template>

<script>
import AllSurah from "~/assets/surah.json";

export default {
  data() {
    return {
      memo_value: 0,
      test_value: 0,
      max: 114,
      surahs: [
        { name: "Al-Faatiha", max: 7, memo: 0, test: 0 },
        { name: "Al-Baqara", max: 286, memo: 0, test: 0 },
        { name: "Aal-i-Imraan", max: 200, memo: 0, test: 0 },
        { name: "An-Nisaa", max: 200, memo: 0, test: 0 },
      ],
    };
  },
  created() {
    this.surahs = this.getSurahList();
  },
  methods: {
    getSurahList() {
      for
    },
  },
};
</script>

<style>
.progress-tile h3 {
  margin-bottom: 0;
  font-weight: 600;
}

.progress-tabs,
.progress-tabs-active {
  background-color: #ffffff;
  border: 0;
}

.progress-tabs:hover,
.progress-tabs-active:hover,
.progress-tabs:focus,
.progress-tabs-active:focus,
.progress-tabs:active,
.progress-tabs-active:active,
.progress-tabs:active:hover,
.progress-tabs-active:active:hover,
.progress-tabs:active:focus,
.progress-tabs-active:active:focus {
  background-color: #ffffff;
  color: #49c0db;
}

.progress-tabs {
  color: #000000;
  font-weight: 500;
}

.progress-tabs-active {
  color: #49c0db;
  font-weight: 700;
  border-bottom: 2px solid #49c0db;
  border-radius: 0;
}

.memo-progress-bar .progress-bar {
  background-color: #49c0db;
}

.test-progress-bar .progress-bar {
  background-color: #359d9e;
}

.progress {
  border-radius: 20px;
}

.progress-header {
  font-weight: 600;
}

.surah-number {
  width: 7px;
  display: inline-block;
}

.surah-list,
.juz-list {
  color: #000000;
}

.icon-dots {
  background-color: #ffffff;
  color: #aaaaaa;
  border: 1px solid #aaaaaa;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0;
  border-radius: 15px;
  text-align: center;
  font-size: 10px;
  line-height: 1.42857;
}

.btn-secondary.disabled.memo-circle {
  background-color: #49c0db;
  color: #ffffff;
  border: 0;
}

.btn-secondary.disabled.test-circle {
  background-color: #359d9e;
  color: #ffffff;
  border: 0;
}

.btn.disabled,
.btn:disabled {
  opacity: 1;
}
</style>
