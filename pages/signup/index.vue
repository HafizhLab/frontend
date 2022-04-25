<template>
  <div class="center-manual container p-4">
    <div class="container title-big px-4 py-2 text-left col-md-3">
      <h1>Sign Up</h1>
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
            <img src="~/assets/img/form_email.png" />
          </span>
        </div>
        <input
          v-model="email"
          type="email"
          class="simple-form form-control border-left-0"
          placeholder="Email"
        />
      </div>
      <div v-if="errors.email.length" class="error-text mt-2 mx-auto">
        <div v-for="error in errors.email" :key="error">
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
      <div v-if="errors.password1.length" class="error-text mt-2 mx-auto">
        <div v-for="error in errors.password1" :key="error">
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
          v-model="confirmPassword"
          type="password"
          class="simple-form form-control border-left-0"
          placeholder="Confirm Password"
        />
      </div>
      <div v-if="errors.password2.length" class="error-text mt-2 mx-auto">
        <div v-for="error in errors.password2" :key="error">
          <p class="mb-0">{{ error }}</p>
        </div>
      </div>
      <div class="button-signup text-center mt-3">
        <b-button variant="primary" @click="register()">Sign Up</b-button>
        <p>
          Already have an account?
          <span class="highlight">
            <nuxt-link to="/login">Login</nuxt-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: [],
        email: [],
        password1: [],
        password2: [],
      },
    };
  },
  methods: {
    async register() {
      this.errors.username = [];
      this.errors.email = [];
      this.errors.password1 = [];
      this.errors.password2 = [];
      await this.$apiInterface
        .register({
          username: this.username,
          password1: this.password,
          password2: this.confirmPassword,
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({
            path: "/",
          });
        })
        .catch((error) => {
          for (const e in error.response.data) {
            switch (`${e}`) {
              case "username":
                this.errors.username.push(`${error.response.data[e]}`);
                break;
              case "email":
                this.errors.email.push(`${error.response.data[e]}`);
                break;
              case "password1":
                this.errors.password1.push(`${error.response.data[e]}`);
                break;
              default:
                this.errors.password2.push(`${error.response.data[e]}`);
                break;
            }
          }
        });
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

.button-signup {
  width: 100%;
}

.button-signup button {
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

.button-signup p a {
  color: black !important;
  font-weight: 700;
}

.simple-form:focus {
  outline: none;
  border: 1px solid #b4b4b4;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.modal-container {
  text-align: center;
  padding: 3%;
}

.modal-open {
  padding-right: 0px !important;
}

.modal-open .modal-dialog {
  padding: 2%;
  border-radius: 50px;
  height: 100%;
  margin: auto;
  display: flex;
}

.modal-content {
  margin: auto;
  height: fit-content;
  border-radius: 15px;
}

.error-text {
  color: #dc143c;
}
</style>
