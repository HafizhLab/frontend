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
      <h4 class="my-auto">Full Review</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room: null,
      player: null,
    };
  },
  created() {
    this.room = {
      // code: this.$route.params.code,
      // surah: this.$route.params.type,
      // maxPlayer: this.$route.params.max,
      code: 1234,
      surah: "Al-Faatiha",
      maxPlayer: 3,
      winner1: ["Lorem Ipsum", 81],
      winner2: ["Lulu Ilmaknun", 66],
      winner3: ["Dolor Sitamet", 63],
    };
    this.player = {
      name: "Lulu Ilmaknun",
      // score: this.$route.params.score,
      // correct: this.$route.params.correct
      // averageTime: this.$route.params.averagetime,
      score: 66,
      correct: 7,
      averageTime: 16.5,
      rank: 2,
    };
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
</style>
