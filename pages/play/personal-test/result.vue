<template>
  <div class="pt-3 pb-5 container">
    <div class="title-sm pb-3">
      <h5>
        <nuxt-link to="/play/personal-test">
          <b-icon icon="chevron-left" class="mr-2"></b-icon>
        </nuxt-link>
        Personal Test
      </h5>
    </div>
    <div class="main-section">
      <h3>Results</h3>
      <div class="row result-label">
        <div class="col-7">
          <h5>Correctness</h5>
        </div>
        <div class="col-5">
          <h5>{{ totalCorrectness }}/{{ totalQuestion }}</h5>
        </div>
      </div>
      <b-progress :max="10" height="1.3rem">
        <b-progress-bar :value="totalCorrectness"> </b-progress-bar>
      </b-progress>
      <div class="review-section mt-3">
        <div v-for="(item, index) in review" :key="index" class="review-item">
          <div class="row">
            <div class="col-9">
              <h6>
                {{ index + 1 }}. {{ item.name }} verse {{ item.verseNum }}
              </h6>
            </div>
            <div class="col-3">
              <h3>
                <b-icon
                  v-if="item.isCorrect"
                  id="green-color"
                  icon="check-circle-fill"
                ></b-icon>
                <b-icon v-else id="red-color" icon="x-circle-fill"></b-icon>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: [
        {
          name: "Al Fajr",
          verseNum: 11,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 29,
          isCorrect: true,
        },
        {
          name: "Al Fajr",
          verseNum: 20,
          isCorrect: true,
        },
        {
          name: "Al Fajr",
          verseNum: 15,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 3,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 25,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 2,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 18,
          isCorrect: false,
        },
        {
          name: "Al Fajr",
          verseNum: 10,
          isCorrect: true,
        },
        {
          name: "Al Fajr",
          verseNum: 4,
          isCorrect: false,
        },
      ],
      totalQuestion: 10,
      totalCorrectness: 4,
    };
  },
  created() {
    var result = this.$store.state.playResult;
    this.review = result.review;
    this.totalQuestion = result.totalQuestion;
    this.totalCorrectness = result.totalCorrectness;
  },
};
</script>

<style scoped>
.title-sm h5 {
  margin-bottom: 0;
  font-weight: 600;
}

.main-section .result-label h5 {
  font-weight: bold;
}

.main-section .result-label .col-5 {
  text-align: right;
}

.main-section .progress {
  background-color: #eeeeee;
  border-radius: 2rem;
  text-align: right;
}

.main-section .progress-bar {
  background-color: #49c0db;
  border-radius: 2rem;
}

.review-item {
  border: 1px solid #c1c1c1;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
}

.review-item .col-9 {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.review-item .col-3 {
  text-align: right;
}

.review-item h3,
.review-item h6 {
  margin-bottom: 0;
}

#green-color {
  color: #6ac259;
}

#red-color {
  color: #e92e30;
}
</style>
