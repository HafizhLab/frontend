<template>
  <div class="pt-3 pb-5 container">
    <div class="title-sm pb-3">
      <h5>
        <nuxt-link to="/play/multiplayer">
          <b-icon icon="chevron-left" class="mr-2"></b-icon>
        </nuxt-link>
        Multiplayer
      </h5>
    </div>
    <div>
      <div class="result-section p-3 text-center">
        <h6 class="ranking-header mb-3">Ranking</h6>
        <b-row align-v="end">
          <b-col>
            <div class="second-winner">
              <h2 class="winner-rank">2</h2>
            </div>
          </b-col>
          <b-col>
            <div class="first-winner">
              <h2 class="winner-rank">1</h2>
            </div>
          </b-col>
          <b-col>
            <div class="third-winner">
              <h2 class="winner-rank">3</h2>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <p>{{ room.winner2[0] }}</p>
            <p class="winner-score">{{ room.winner2[1] }}</p>
          </b-col>
          <b-col>
            <p>{{ room.winner1[0] }}</p>
            <p class="winner-score">{{ room.winner1[1] }}</p>
          </b-col>
          <b-col>
            <p>{{ room.winner3[0] }}</p>
            <p class="winner-score">{{ room.winner3[1] }}</p>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="mt-3 p-1 text-center">
      <h4 class="my-auto">
        <img
          src="~/assets/img/dummy-user.png"
          alt="UserProfile"
          width="40"
          height="40"
        />
        {{ player.name }}
      </h4>
    </div>
    <div class="mt-3">
      <b-row>
        <b-col>
          <div class="result-section p-3 text-center">
            <h6 class="progress-header">Score</h6>
            <h5 class="progress-header mb-0">{{ player.score }}</h5>
          </div>
        </b-col>
        <b-col>
          <div class="result-section p-3 text-center">
            <h6 class="progress-header">Rank</h6>
            <h5 class="progress-header mb-0">
              {{ player.rank }}/{{ room.maxPlayer }}
            </h5>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="mt-3 mb-4">
      <b-row>
        <b-col>
          <div class="result-section p-3 text-center">
            <h6 class="progress-header">Correctness</h6>
            <h5 class="progress-header mb-0">{{ player.correct }}/10</h5>
          </div>
        </b-col>
        <b-col>
          <div class="result-section p-3 text-center">
            <h6 class="progress-header">Average Time</h6>
            <h5 class="progress-header mb-0">{{ player.averageTime }} s</h5>
          </div>
        </b-col>
      </b-row>
    </div>
    <hr />
    <div class="mt-4 p-1 text-center">
      <h4 class="my-auto">Review</h4>
      <div
        v-for="(q, index) in questions"
        :key="q.name"
        class="result-section mt-3 p-3"
      >
        <div class="review-header mb-2">
          {{ parseInt(index) + 1 }}. {{ q.name }}
          <b-badge
            v-if="q.isCorrect"
            variant="success"
            pill
            class="px-2 py-1 ml-1"
          >
            You are Correct
          </b-badge>
          <b-badge v-else variant="danger" pill class="px-2 py-1 ml-1">
            You are Wrong
          </b-badge>
        </div>
        <b-progress
          :value="q.correctCount"
          :max="room.maxPlayer"
          height="18px"
          class="review-bar mb-2"
        >
        </b-progress>
        <p>
          Players Answer Correctly: {{ q.correctCount }} /
          {{ room.maxPlayer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room: null,
      player: null,
      questions: null,
    };
  },
  created() {
    this.room = {
      // code: this.$route.params.code,
      surah: this.$route.params.surah,
      // maxPlayer: this.$route.params.max,
      // winner1: this.$route.params.winner1,
      // winner2: this.$route.params.winner3,
      // winner3: this.$route.params.winner3,
      code: 1234,
      // surah: "Al-Faatiha",
      maxPlayer: 6,
      winner1: ["Lorem Ipsum", 81],
      winner2: ["admin", 66],
      winner3: ["Dolor Sitamet", 63],
    };
    this.player = {
      name: this.$store.state.user.username,
      score: this.$route.params.playerScore,
      correct: this.$route.params.playerCorrect,
      averageTime: this.$route.params.playerAverageTime,
      // rank: this.$route.params.playerRank,
      // score: 66,
      // correct: 7,
      // averageTime: 16.5,
      rank: 2,
    };
    this.questions = this.$store.state.playResult.review;
  },
};
</script>

<style>
.title-sm h5 {
  font-weight: 600;
}
.result-section {
  border-radius: 15px;
  border: 1px solid #ededeb;
}
.result-section h6 {
  color: #49c0db;
}
.result-bar .progress-bar {
  background-color: #49c0db;
}
.first-winner,
.second-winner,
.third-winner {
  color: #ffffff;
}
.first-winner {
  background-color: #e5bb07;
  min-height: 100px;
}
.second-winner {
  background-color: #b5b5b5;
  min-height: 70px;
}
.third-winner {
  min-height: 40px;
  background-color: #ff9e73;
}
.winner-rank {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.result-section p {
  margin: 0;
  font-size: 11px;
}
.ranking-header {
  font-weight: 600;
  font-size: 1.5rem;
}
.winner-score {
  color: #aaaaaa;
}
.review-header {
  font-weight: 700;
  color: #000000;
  font-size: 12px;
}
.review-bar {
  background-color: #ffd5d4;
}
.review-bar .progress-bar {
  color: #000000;
  background-color: #bde7bd;
}
</style>
