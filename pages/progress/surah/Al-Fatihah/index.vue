<template>
  <div class="pt-3 pb-5">
    <div class="memo-surah-title pb-3">
      <h4 class="ml-4 my-0">
        <nuxt-link :to="`/progress`">
          <img
            src="~/assets/img/ic_back.png"
            alt=""
            class="inline-block mr-2"
            height="15"
            width="8.7"
          />
        </nuxt-link>
        Al-Fatihah
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
      <p>
        \ufeff\u0628\u0650\u0633\u0652\u0645\u0650
        \u0627\u0644\u0644\u0651\u064e\u0647\u0650
        \u0627\u0644\u0631\u0651\u064e\u062d\u0652
        \u0645\u064e\u0670\u0646\u0650\u0627\u0644
        \u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo_value: 7,
      memo_max: 7,
      test_value: 5,
      test_max: 7,
    };
  },
};
</script>

<style>
.memo-surah-title h4 {
  font-weight: 600;
}
</style>
