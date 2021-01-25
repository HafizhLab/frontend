<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container">
        <h3>
          <nuxt-link to="/play/multiplayer"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Multiplayer
        </h3>
      </div>
    </div>
    <div class="main-menu mt-4 container text-center">
      <h4>Room #{{ room.code }}</h4>
      <h4>By {{ room.testType }} : {{ room.chosen }}</h4>
      <h5>
        <strong>1/{{ room.maxPlayer }} players</strong>
      </h5>
      <nuxt-link to="/play/multiplayer/questions">
        <b-button variant="primary" class="pl-5 pr-5"><p>Start</p></b-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params, redirect }) {
    if (params.chosen == "" || params.max < 2 || params.max > 10)
      redirect({ name: "play-multiplayer-create-room" });
    if (params.code == "" || params.code.length != 4)
      redirect({ name: "play-multiplayer" });
    return true;
  },
  data() {
    return {
      room: null,
    };
  },
  created() {
    var data = {
      testType: this.$route.params.type,
      testBasedOn: this.$route.params.basedOn,
      chosen: this.$route.params.chosen,
      code: this.$route.params.code,
      maxPlayer: this.$route.params.max,
    };
    this.room = data;
  },
};
</script>

<style></style>
