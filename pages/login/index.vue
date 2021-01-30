<template>
  <div class="center-manual container p-4">
    <div class="container title-big px-4 py-2 text-left col-md-3">
      <h1>Login</h1>
    </div>
    <div class="container col-md-3 input-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text border-right-0">
            <img src="~/assets/img/form_user.png" />
          </span>
        </div>
        <input
          v-model="username"
          type="text"
          class="simple-form form-control border-left-0"
          placeholder="Username"
        />
      </div>
      <div v-if="errors.username.length" class="error-text mt-2 mx-auto">
        <div v-for="error in errors.username" :key="error">
          <p class="mb-0">{{ error }}</p>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text border-right-0">
            <img src="~/assets/img/form_password.png" />
          </span>
        </div>
        <input
          v-model="password"
          type="password"
          class="simple-form form-control border-left-0"
          placeholder="Password"
        />
      </div>
      <div v-if="errors.password.length" class="error-text mt-2 mx-auto">
        <div v-for="error in errors.password" :key="error">
          <p class="mb-0">{{ error }}</p>
        </div>
      </div>
      <div class="button-login text-center mt-3">
        <b-button variant="primary" @click="login()">Login</b-button>
        <p>
          Don’t have an account?
          <span class="highlight">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import apiInterface from "~/api/apiInterface.js";
import cookie from "js-cookie";

export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      errors: {
        username: [],
        password: [],
      },
    };
  },
  methods: {
    login() {
      this.errors.username = [];
      this.errors.password = [];
      if (this.$store.state.user) {
        this.$router.push({
          path: "/",
        });
      } else {
        apiInterface
          .login({
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            let access_token = response.data.key;
            let expired = 60 * 60 * 1000;
            cookie.set("token", access_token, { expires: expired });
            this.$store.commit("SET_USER", {
              username: this.username,
            });
            this.$router.push({
              path: "/",
            });
          })
          .catch((error) => {
            console.log(error);
            for (const e in error.response.data) {
              if (`${e}` === "username") {
                this.errors.username.push(`${error.response.data[e]}`);
              } else {
                this.errors.password.push(`${error.response.data[e]}`);
              }
            }
          });
      }
    },
  },
};
</script>

<style>
.center-manual {
  margin-top: 5rem !important;
}
.title-big h1 {
  font-weight: 900;
}
.container {
  margin: 0 auto;
}
.simple-form {
  width: 100%;
  height: 32pt;
  margin: 15px 0;
  padding: 0 10px;
  border: 1px solid #b4b4b4;
  box-sizing: border-box;
  border-radius: 15px;
}
.input-group-text {
  border-radius: 15px;
  background: white;
  border: 1px solid #b4b4b4;
  margin-top: 15px;
}
.input-icons img {
  position: absolute;
}
.icon {
  padding: 5px;
  color: #49c0db;
  min-width: 10px;
  text-align: center;
}
.button-login {
  width: 100%;
}
.button-login button {
  width: 100%;
  background-color: #49c0db;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  border-radius: 30px;
  border: 0px;
  padding: 0.7rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16pt;
  font-weight: 900;
}
.button-login p a {
  color: black !important;
  font-weight: 700;
}
.simple-form:focus {
  outline: none;
  border: 1px solid #b4b4b4;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
