<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container">
        <h3>
          <nuxt-link to="/play/multiplayer"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Search Room
        </h3>
      </div>
    </div>
    <div class="main-menu mt-4 container">
      <div class="type">
        <h5>Test Type</h5>
        <b-button
          :variant="[testType == 'Verse' ? 'primary' : 'outline-primary']"
          @click="switchTestType('verse')"
          ><p>By Verse</p></b-button
        >
        <b-button
          :variant="[testType == 'Word' ? 'primary' : 'outline-primary']"
          @click="switchTestType('word')"
          ><p>By Word</p></b-button
        >
      </div>
      <div class="based mt-4">
        <h5>Choose Based on</h5>
        <b-button
          :variant="[testBasedOn == 'Surah' ? 'primary' : 'outline-primary']"
          @click="switchBasedType('surah')"
          ><p>Surah</p></b-button
        >
        <b-button
          :variant="[testBasedOn == 'Juz' ? 'primary' : 'outline-primary']"
          @click="switchBasedType('juz')"
          ><p>Juz</p></b-button
        >
      </div>
      <div class="choose mt-4">
        <h5 class="mb-3">Choose {{ testBasedOn }}</h5>
        <vue-simple-suggest
          v-model="chosen"
          :list="simpleSuggestionList"
          :filter-by-query="true"
          display-attribute="name"
          value-attribute="number"
          placeholder="Search..."
          max-suggestions="114"
        ></vue-simple-suggest>
      </div>
      <div class="button-start text-center mt-3">
        <nuxt-link
          :to="{
            name: 'play-multiplayer-search-room-list-rooms',
            params: {
              type: testType,
              basedOn: testBasedOn,
              chosen: chosen,
            },
          }"
        >
          <b-button variant="primary"><p>Search</p></b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import apiInterface from "~/api/apiInterface.js";
import VueSimpleSuggest from "vue-simple-suggest";
import "vue-simple-suggest/dist/styles.css";

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      testType: "Verse",
      testBasedOn: "Surah",
      chosen: "",
      surahList: [],
      juzList: [],
    };
  },
  computed: {
    simpleSuggestionList() {
      if (this.testBasedOn == "Surah") {
        return this.surahList;
      } else {
        return this.juzList;
      }
    },
  },
  created() {
    this.getSurahList();
    this.getJuzList();
  },
  methods: {
    getSurahList() {
      apiInterface.getQuranMeta().then((response) => {
        var result = [];
        response.data.data.surahs.references.forEach((surah) => {
          result.push({
            number: surah.number,
            name: surah.englishName,
          });
        });
        this.surahList = result;
      });
    },
    getJuzList() {
      var result = [];
      for (var i = 1; i <= 30; i++) {
        result.push({
          number: i,
          name: `Juz ${i}`,
        });
      }
      this.juzList = result;
    },
    switchTestType(type) {
      if (this.testType == "Verse" && type != "verse") {
        this.testType = "Word";
      } else if (this.testType == "Word" && type != "word") {
        this.testType = "Verse";
      }
    },
    switchBasedType(type) {
      if (this.testBasedOn == "Surah" && type != "surah") {
        this.testBasedOn = "Juz";
      } else if (this.testBasedOn == "Juz" && type != "juz") {
        this.testBasedOn = "Surah";
      }
      this.chosen = "";
    },
  },
};
</script>

<style>
.title {
  border-bottom: 1px solid #ededeb;
}

.title h3 {
  margin-bottom: 0;
  font-weight: 600;
}

.main-menu h5,
.main-menu p {
  font-weight: 600;
  margin-bottom: 0;
}

.main-menu button {
  margin-top: 1rem;
  border-radius: 3rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.button-start button {
  padding: 1rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}

.main-menu .btn-primary,
.main-menu .btn-primary:hover {
  background-color: #49c0db;
  border-color: #49c0db;
  outline: none;
}

.main-menu .btn-outline-primary,
.main-menu .btn-outline-primary:hover {
  color: #9fa5c0;
  border-color: #9fa5c0;
  background-color: white;
  outline: none;
}

a,
a:hover {
  text-decoration: none;
  color: black;
}

.vue-simple-suggest.designed .input-wrapper input {
  border-radius: 2rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid #8c8fa5;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
}

.vue-simple-suggest.designed .input-wrapper input:focus {
  border-radius: 2rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid #49c0db;
}

.vue-simple-suggest.designed .suggestions {
  max-height: 10rem;
  overflow-y: scroll;
}
</style>
