<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container">
        <h2>
          <nuxt-link to="/play"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Personal Test
        </h2>
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
      <div class="based mt-3">
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
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style>
.title {
  border-bottom: 1px solid #ededeb;
}

.title h2 {
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
</style>
