<template>
  <div class="nav-container">
    <div class="nav-column">
      <div class="nav-item home">
        <nuxt-link to="/">
          <div v-if="$route.name === 'index'">
            <img
              src="~/assets/img/NavMenu/home_active.png"
              alt="HomeButton"
              class="inline-block"
              height="27"
              width="28.6"
            />
            <p class="nav-text nav-text-active">Home</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/home_default.png"
              alt="HomeButton"
              class="inline-block"
              height="27"
              width="28.6"
            />
            <p class="nav-text">Home</p>
          </div>
        </nuxt-link>
      </div>

      <div class="nav-item challenges">
        <nuxt-link to="#">
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
      </div>

      <div class="nav-item play">
        <nuxt-link to="/play">
          <div v-if="$route.name.startsWith('play')">
            <img
              src="~/assets/img/NavMenu/play_active.png"
              alt="PlayButton"
              class="inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text nav-text-active">Play</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/play_default.png"
              alt="PlayButton"
              class="inline-block"
              height="27"
              width="27"
            />
            <p class="nav-text">Play</p>
          </div>
        </nuxt-link>
      </div>

      <div class="nav-item memo">
        <nuxt-link to="#">
          <div v-if="$route.name.startsWith('mymemo')">
            <img
              src="~/assets/img/NavMenu/memo_active.png"
              alt="MyMemoButton"
              class="inline-block"
              height="27"
              width="31.64"
            />
            <p class="nav-text nav-text-active">My Memo</p>
          </div>
          <div v-else>
            <img
              src="~/assets/img/NavMenu/memo_default.png"
              alt="MyMemoButton"
              class="inline-block"
              height="27"
              width="31.64"
            />
            <p class="nav-text">My Memo</p>
          </div>
        </nuxt-link>
      </div>

      <div class="nav-item profile">
        <nuxt-link to="#">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

.nav-column {
  display: flex;
  width: 95%; /* ini belum responsive */
  height: 40px;
  margin: auto;
}

.nav-item {
  text-align: center;
  margin-left: 20px;
}

.nav-text {
  font-weight: 600;
  margin-top: 5px;
}

.nav-text-active {
  color: #49c0db;
}
</style>
