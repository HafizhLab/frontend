<template>
  <div class="pt-3 pb-5">
    <div class="title pb-3">
      <div class="container">
        <h3>
          <nuxt-link to="/play/multiplayer/search-room"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Search Room
        </h3>
      </div>
    </div>
    <div class="main-menu mt-4 container">
      <h5 class="mb-2">Available Rooms for choice:</h5>
      <h4>By {{ $route.params.type }} : {{ $route.params.chosen }}</h4>
      <div class="list-room mt-4 container">
        <nuxt-link
          v-for="room in listRooms"
          :key="room.code"
          :to="{
            name: 'play-multiplayer-waiting-room',
            params: { code: room.code },
          }"
        >
          <div class="row item">
            <div class="col-6">Room #{{ room.code }}</div>
            <div class="col-6 players">
              {{ room.playerJoined }}/{{ room.maxPlayer }} players
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="text-center mt-4 back-to-create">
        <p class="regular-font mb-2">Can't find what you're looking for?</p>
        <nuxt-link to="/play/multiplayer/create-room">
          Create New Room
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listRooms: [
        {
          code: "8753",
          playerJoined: 3,
          maxPlayer: 5,
        },
        {
          code: "3875",
          playerJoined: 2,
          maxPlayer: 10,
        },
        {
          code: "1298",
          playerJoined: 4,
          maxPlayer: 5,
        },
      ],
    };
  },
  validate({ params, redirect }) {
    if (params.type == "" || params.basedOn == "" || params.chosen == "")
      redirect({ name: "play-multiplayer-search-room" });
    return true;
  },
  methods: {},
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

a,
a:hover {
  text-decoration: none;
  color: black;
}

.main-menu h4 {
  margin-left: -2px;
}

.list-room {
  border: 1px solid #49c0db;
  max-height: 20rem;
  overflow-y: scroll;
}

.list-room .item {
  padding: 1rem 0;
  border-bottom: 1px solid #ededeb;
}

.list-room .item .players {
  text-align: right;
}

.regular-font {
  font-weight: 400 !important;
}

.back-to-create a {
  font-size: 13px;
  font-weight: bold;
}
</style>
