<template>
  <b-container class="nav-container" fluid>
    <b-row align-v="center" class="nav-items">
      <b-col class="text-center">
        <nuxt-link to="/">
          <div v-if="$route.name.startsWith('index')">
            <img
              src="~/assets/img/NavMenu/home_active.png"
              alt="HomeButton"
              class="inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text nav-text-active">Home</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/home_default.png"
              alt="HomeButton"
              class="inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text">Home</p>
          </div>
        </nuxt-link>
      </b-col>

      <b-col class="text-center">
        <nuxt-link to="/challenge">
          <div v-if="$route.name.startsWith('challenge')">
            <img
              src="~/assets/img/NavMenu/challenges_active.png"
              alt="ChallengesButton"
              class="inline-block"
              height="27"
              width="34.25"
            />
            <p class="nav-text nav-text-active">Challenges</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/challenges_default.png"
              alt="ChallengesButton"
              class="inline-block"
              height="27"
              width="34.25"
            />
            <p class="nav-text">Challenges</p>
          </div>
        </nuxt-link>
      </b-col>

      <b-col class="text-center">
        <nuxt-link to="/play">
          <div v-if="$route.name.startsWith('play')">
            <img
              src="~/assets/img/NavMenu/play_active.png"
              alt="PlayButton"
              class="play-icon inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text nav-text-active">Play</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/play_default.png"
              alt="PlayButton"
              class="play-icon inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text">Play</p>
          </div>
        </nuxt-link>
      </b-col>

      <b-col class="text-center">
        <nuxt-link to="/progress/surah">
          <div v-if="$route.name.startsWith('progress')">
            <img
              src="~/assets/img/NavMenu/memo_active.png"
              alt="MyMemoButton"
              class="inline-block"
              height="27"
              width="31.64"
            />
            <p class="nav-text nav-text-active">Progress</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/memo_default.png"
              alt="ProgressButton"
              class="inline-block"
              height="27"
              width="31.64"
            />
            <p class="nav-text">Progress</p>
          </div>
        </nuxt-link>
      </b-col>

      <b-col class="text-center">
        <nuxt-link to="/profile">
          <div v-if="$route.name.startsWith('profile')">
            <img
              src="~/assets/img/NavMenu/profile_active.png"
              alt="ProfileButton"
              class="inline-block"
              height="27"
              width="28.1"
            />
            <p class="nav-text nav-text-active">Profile</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/profile_default.png"
              alt="ProfileButton"
              class="inline-block"
              height="27"
              width="28.1"
            />
            <p class="nav-text">Profile</p>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 320px) {
  .nav-text {
    font-size: 6px;
  }
}

@media (min-width: 375px) {
  .nav-text {
    font-size: 8px;
  }
}

@media (min-width: 425px) {
  .nav-text {
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .nav-text {
    font-size: 13px;
  }
}

.nav-container {
  height: 60px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.nav-items {
  min-height: 60px;
}

.nav-text {
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 0;
  color: #848484;
}

.nav-text-active {
  color: #49c0db;
}

.play-icon {
  width: 4rem;
  margin-top: -25px;
  height: auto;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
  border: 1px solid #ffffff;
  border-radius: 100%;
}
</style>
