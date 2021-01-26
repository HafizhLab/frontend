<template>
  <div class="pt-3 pb-5">
    <div class="memo-surah-title pb-3">
      <h4 class="ml-4 my-0">
        <nuxt-link to="/progress">
          <img
            src="~/assets/img/ic_back.png"
            alt=""
            class="inline-block mr-2"
            height="15"
            width="8.7"
          />
        </nuxt-link>
        {{ surah.name }}
      </h4>
    </div>
    <b-container>
      <b-row class="mb-2">
        <b-col><h5 class="progress-header my-auto">Memorized</h5></b-col>
        <b-col>
          <h6 class="progress-header text-right my-auto">
            {{ memo_value }} / {{ memo_max }}
          </h6>
        </b-col>
      </b-row>
      <b-progress
        :value="memo_value"
        :max="memo_max"
        height="18px"
      ></b-progress>
      <div class="mt-3 mb-4">
        <b-row class="mb-2">
          <b-col><h5 class="progress-header my-auto">Tested</h5></b-col>
          <b-col>
            <h6 class="progress-header text-right my-auto">
              {{ test_value }} / {{ test_max }}
            </h6>
          </b-col>
        </b-row>
        <b-progress
          :value="test_value"
          :max="test_max"
          height="18px"
        ></b-progress>
      </div>
      <hr />
      <b-list-group v-for="ayat in ayatData" :key="ayat">
        <b-list-group-item class="text-right ayat-items">
          {{ ayat }}
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import Dummy from "~/static/Albaqarah.json";

export default {
  data() {
    return {
      memo_value: 7,
      memo_max: 7,
      test_value: 5,
      test_max: 7,
      surah: null,
      ayatData: null,
    };
  },
  created() {
    this.surah = {
      name: this.$route.params.name,
    };
    this.ayatData = this.getAyat();
  },
  methods: {
    getAyat() {
      const surah = this.surah;
      const surahData = Dummy.data[0].ayahs.filter(function (ayat) {
        return ayat.surah === surah.name;
      });
      return surahData.map(function (ayat) {
        return ayat.text;
      });
    },
  },
};
</script>

<style>
.memo-surah-title h4 {
  font-weight: 600;
}
.ayat-items {
  border-width: 0 0 1px 0;
}
</style>
