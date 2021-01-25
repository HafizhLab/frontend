<template>
  <div>
    <b-row>
      <b-col><h5 class="progress-header">Memorized</h5></b-col>
      <b-col>
        <h5 class="progress-header text-right">
          {{ memo_value }} / {{ memo_max }}
        </h5>
      </b-col>
    </b-row>
    <b-progress :value="memo_value" :max="memo_max" height="18px"></b-progress>
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
    <b-list-group v-for="(surah, index) in surahs" :key="surah.name">
      <b-list-group-item>
        <nuxt-link :to="`/surah/${surah.name}`" class="surah-list">
          <section class="surah-number mr-2">{{ index }}</section>
          {{ surah.name }}
        </nuxt-link>
      </b-list-group-item>
    </b-list-group>
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
      surahs: [
        { name: "Al-Fatihah" },
        { name: "Al-Baqarah" },
        { name: "Ali Imran" },
      ],
    };
  },
};
</script>

<style>
.progress-bar {
  background-color: #49c0db;
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
</style>
