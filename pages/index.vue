<template>
  <div class="container pt-3 pb-5">
    <div class="row salam pb-3">
      <div class="col-9">
        <p>Assalamualaikum, <span>Lulu Ilmaknun</span></p>
      </div>
      <div class="col-3 text-center">
        <img src="~/assets/img/dummy-user.png" />
      </div>
    </div>
    <div class="streak mt-3">
      <div class="streak-child p-4 text-center">
        <div class="text-center">
          <img
            src="~/assets/img/dummy-progress-streak.png"
            alt=""
            width="200"
            height="30.22"
          />
        </div>
        <div class="mt-3">
          <h4>2-days streak</h4>
        </div>
        <div>
          <p>
            Do personal test or take part in multiplayer game to continue the
            streak!
          </p>
        </div>
      </div>
    </div>
    <div class="main-menu mt-5">
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
.salam {
  border-bottom: 1px solid #ededeb;
}

.salam .col-9,
.salam .col-3 {
  display: flex;
}

.salam p {
  color: #49c0db;
  font-size: 18px;
  margin-bottom: 0;
  align-self: center;
}

.salam img {
  align-self: center;
}

.salam p span {
  display: inline-block;
  font-weight: bold;
}

.streak-child {
  border: 1px solid #49c0db;
  border-radius: 25px;
}

.streak-child h4 {
  color: #49c0db;
  font-weight: 600;
}

.streak-child p {
  color: #848484;
  font-weight: 500;
  margin-bottom: 0;
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
