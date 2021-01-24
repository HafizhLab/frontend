<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3 text-center">
      <h3>Play</h3>
    </div>
    <div class="main-menu mt-4 container">
      <nuxt-link to="/play/personal-test">
        <div class="personal-test-card text-center p-3 pt-4 pb-4">
          <img src="~/assets/img/singleplayer-icon.png" alt="" />
          <h5 class="mt-3">Personal Test</h5>
        </div>
      </nuxt-link>
      <nuxt-link to="/play/multiplayer">
        <div class="multiplayer-test-card text-center p-3 pt-4 pb-4 mt-4">
          <img src="~/assets/img/multiplayer-icon.png" alt="" />
          <h5 class="mt-3">Multiplayer</h5>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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

.personal-test-card {
  border-radius: 15px;
  background-color: #359d9e;
}

.personal-test-card h5 {
  color: white;
  font-weight: 500;
  margin-bottom: 0;
}

.multiplayer-test-card {
  border-radius: 15px;
  background-color: #5ec699;
}

.multiplayer-test-card h5 {
  color: white;
  font-weight: 500;
  margin-bottom: 0;
}

a:hover {
  text-decoration: none;
}
</style>
