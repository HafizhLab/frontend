<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container">
        <h3>
          <nuxt-link to="/play"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Personal Test
        </h3>
      </div>
    </div>
    <div class="main-menu mt-4 container">
      <div class="type">
        <h5>Test Type</h5>
        <b-button
          :variant="[byVerse ? 'primary' : 'outline-primary']"
          @click="switchTestType('verse')"
          ><p>By Verse</p></b-button
        >
        <b-button
          :variant="[byVerse ? 'outline-primary' : 'primary']"
          @click="switchTestType('word')"
          ><p>By Word</p></b-button
        >
      </div>
      <div class="based mt-4">
        <h5>Choose Based on</h5>
        <b-button
          :variant="[surah ? 'primary' : 'outline-primary']"
          @click="switchBasedType('surah')"
          ><p>Surah</p></b-button
        >
        <b-button
          :variant="[surah ? 'outline-primary' : 'primary']"
          @click="switchBasedType('juz')"
          ><p>Juz</p></b-button
        >
      </div>
      <div class="choose mt-4">
        <h5 v-if="surah" class="mb-3">Choose Surah</h5>
        <h5 v-else class="mb-3">Choose Juz</h5>
        <vue-simple-suggest
          v-model="chosen"
          :list="simpleSuggestionList"
          :filter-by-query="true"
          placeholder="Search..."
        ></vue-simple-suggest>
      </div>
      <div class="button-start text-center mt-3">
        <nuxt-link to="/play/personal-test/questions/1">
          <b-button variant="primary"><p>Start</p></b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import "vue-simple-suggest/dist/styles.css";

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      byVerse: true,
      surah: true,
    };
  },
  methods: {
    switchTestType(type) {
      if (this.byVerse && type != "verse") {
        this.byVerse = false;
      } else if (!this.byVerse && type != "word") {
        this.byVerse = true;
      }
    },
    switchBasedType(type) {
      if (this.surah && type != "surah") {
        this.surah = false;
      } else if (!this.surah && type != "juz") {
        this.surah = true;
      }
    },
    simpleSuggestionList() {
      if (this.surah) {
        return [
          "Al-Faatihah",
          "Al-Baqarah",
          "Ali-Imran",
          "An-Nisaa",
          "Al-Maaidah",
        ];
      } else {
        return ["Juz 1", "Juz 2", "Juz 3", "Juz 4", "Juz 5"];
      }
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
