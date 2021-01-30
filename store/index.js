// import Vuex from "vuex";
// import cookie from "cookie";
// import apiInterface from "~/api/apiInterface.js";

export const state = () => ({
  user: null,
  question: null,
  countDown: null,
});

export const mutations = {
  SET_USER(state, data) {
    state.user = data;
  },
  SET_QUESTION(state, data) {
    state.question = data;
  },
  SET_COUNTDOWN(state, data) {
    state.countDown = data;
  },
};
