<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container text-center">
        <h3>Challenges</h3>
      </div>
    </div>
    <div class="challenge-menu container">
      <div class="px-4 py-1 row">
        <b-button variant="primary">
          Create a new challenge
          <nuxt-link to="/challenge/create">
            <b-icon icon="chevron-right" class="ml-5 mr-0"></b-icon>
          </nuxt-link>
        </b-button>
      </div>
      <div class="challenge-container row px-4 pr-0 py-1">
        <div
          v-for="item in getChallengeList()"
          :key="item.id"
          class="challenge-list col-6 px-0"
        >
          <nuxt-link :to="`challenge/${item.id}`">
            <b-card
              :title="item.name"
              class="challenge-card"
              img-src="~/assets/img/challenge-bg.png"
              img-top
            >
              <b-card-text> {{ item.num_of_questions }} Questions </b-card-text>
            </b-card>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    getChallengeList() {
      // Dummy data
      return [
        { id: 0, name: "Al-Baqarah #1", num_of_questions: 3 },
        { id: 1, name: "Al-Baqarah #2", num_of_questions: 5 },
        { id: 2, name: "Al-Baqarah #3", num_of_questions: 3 },
      ];
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

.challenge-menu button {
  width: 100%;
  margin-top: 1rem;
  border-radius: 15px;
  padding: 10px 5px;
  font-weight: 900;
  font-size: 15pt;
}

.challenge-menu .btn-primary {
  background-color: #49c0db;
  border-color: #49c0db;
  outline: none;
}

.challenge-menu .b-icon {
  color: white;
  font-weight: 900;
}

.challenge-container {
  margin-left: -15px;
}

.challenge-card {
  position: relative;
  background: #2c2c2c;
  border-radius: 10px;
  border: 0;
  margin: 10px;
}

.challenge-card .card-body {
  background: #49c0db;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0;
}

.card-body .card-title {
  font-weight: 900;
  color: white;
  font-size: 13pt;
}

.card-body .card-text {
  font-weight: 500;
  color: white;
  font-size: 10pt;
}

.card-img-top {
  height: 6rem;
}
</style>
