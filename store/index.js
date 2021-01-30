// import Vuex from "vuex";
// import cookie from "cookie";
// import apiInterface from "~/api/apiInterface.js";

export const state = () => ({
  user: null,
  listChallenge: [
    { id: 0, name: "Al-Baqarah #1", num_of_questions: 3 },
    { id: 1, name: "Ali-Imran #2", num_of_questions: 5 },
    { id: 2, name: "Al-Baqarah #3", num_of_questions: 3 },
    { id: 3, name: "Juz #3", num_of_questions: 10 },
  ],
  playResult: null,
});

export const mutations = {
  SET_USER(state, data) {
    state.user = data;
  },
  ADD_CHALLENGE(state, data) {
    state.listChallenge.push(data);
  },
  SET_PLAY_RESULT(state, data) {
    state.playResult = data;
  },
};

// export const actions = {
//     async nuxtServerInit({ commit }, context) {
//         const cookies = cookie.parse(context.req.headers.cookie || "")
//         let token = cookies.token
//         await apiInterface.verifyToken({
//             token: token
//         }).then((respone) => {
//             if ()
//         })
//     }
// }
