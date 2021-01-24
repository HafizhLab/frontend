<template>
  <div class="pt-3 pb-5 multiplayer">
    <div class="title pb-3">
      <div class="container">
        <h3>
          <nuxt-link to="/play"
            ><b-icon icon="chevron-left" class="mr-3"></b-icon></nuxt-link
          >Multiplayer
        </h3>
      </div>
    </div>
    <div class="code mt-4 pb-4 text-center">
      <div class="container">
        <h5 class="mb-3">Have a code?</h5>
        <vie-otp-input
          :value="code"
          :num-inputs="4"
          :should-auto-focus="true"
          input-classes="otp-input"
          separator=" "
          style="display: inline-flex"
          @on-change="handleOnChange"
        ></vie-otp-input>
        <br />
        <nuxt-link
          :to="{
            name: 'play-multiplayer-waiting-room',
            params: { code: code },
          }"
        >
          <b-button id="btn-join"><h5>Join Room</h5></b-button>
        </nuxt-link>
      </div>
    </div>
    <div class="button-group mt-4 mb-4 text-center">
      <nuxt-link to="/play/multiplayer/search-room">
        <b-button id="btn-search"><h5>Search Rooms</h5></b-button>
      </nuxt-link>
      <br />
      <nuxt-link to="/play/multiplayer/create-room">
        <b-button id="btn-create"><h5>Create New Room</h5></b-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import VieOtpInput from "@bachdgvn/vue-otp-input";

export default {
  components: {
    VieOtpInput,
  },
  data() {
    return {
      code: "",
    };
  },
  methods: {
    handleOnChange(value) {
      this.code = value;
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

.multiplayer h5,
.multiplayer p {
  font-weight: bold;
  margin-bottom: 0;
}

.multiplayer button {
  margin-top: 1rem;
  border-radius: 3rem;
  padding: 1rem;
  min-width: 17rem;
}

.code {
  border-bottom: 1px solid #ededeb;
}

.code #btn-join {
  background-color: #49c0db;
  border: 1px solid #49c0db;
}

#btn-search {
  background-color: #359d9e;
  border: 1px solid #359d9e;
}

#btn-create {
  background-color: #5ec699;
  border: 1px solid #5ec699;
}

a,
a:hover {
  text-decoration: none;
  color: black;
}

.otp-input {
  font-weight: 700;
  width: 40px;
  height: 40px;
  padding: 5px;
  font-size: 20px;
  color: #3e5481;
  margin: 0 10px;
  border-radius: 1rem;
  border: 1px solid #d0dbea;
  text-align: center;
}

.otp-input:focus {
  outline: none;
  border: 2px solid #49c0db;
}
</style>
