<template>
  <div>
    <b-row class="mb-2">
      <b-col><h5 class="progress-header my-auto">Memorized</h5></b-col>
      <b-col>
        <h6 class="progress-header text-right my-auto">
          {{ memo_value }} / {{ memo_max }}
        </h6>
      </b-col>
    </b-row>
    <b-progress :value="memo_value" :max="memo_max" height="18px"></b-progress>
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
    <b-list-group v-for="(juz, index) in juz_list" :key="juz.name">
      <b-list-group-item
        v-b-toggle="`collapse-surahs-${index}`"
        class="m-1 juz-list"
      >
        <img
          src="~/assets/img/collapse.png"
          alt=""
          class="inline-block"
          height="3"
          width="5"
        />
        {{ juz.name }}
        <b-collapse :id="`collapse-surahs-${index}`" class="my-2">
          <div
            v-for="surah in juz.surahs"
            :key="surah.name"
            class="my-auto ml-2"
          >
            <nuxt-link :to="`/progress/surah/${surah.name}`" class="surah-list">
              {{ surah.name }}
              <b-badge variant="primary" pill>{{ surah.ayat }}</b-badge>
            </nuxt-link>
          </div>
        </b-collapse>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo_value: 5,
      memo_max: 30,
      test_value: 2,
      test_max: 30,
      juz_list: [
        {
          name: "Juz 1",
          surahs: [
            { name: "Al-Fatihah", ayat: "1-7" },
            { name: "Al-Baqarah", ayat: "1-141" },
          ],
        },
        {
          name: "Juz 2",
          surahs: [{ name: "Al-Baqarah", ayat: "142-252" }],
        },
        {
          name: "Juz 3",
          surahs: [
            { name: "Al-Baqarah", ayat: "253-286" },
            { name: "Ali Imran", ayat: "1-92" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.badge-primary {
  background-color: #aaaaaa;
  font-weight: 400;
}
</style>
