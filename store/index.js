// import Vuex from "vuex";
// import cookie from "cookie";
// import apiInterface from "~/api/apiInterface.js";

export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER(state, data) {
    state.user = data;
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
