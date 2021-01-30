import { be, quran, auth } from "~/api/config";

export default {
  /* Auth */

  register(data) {
    return auth.post("/api/v1/auth/registration/", data);
  },

  login(data) {
    return auth.post("/api/v1/auth/login/", data);
  },

  verifyToken(data) {
    return be.post("/api/v1/auth/token/verify/", data);
  },

  /* Al Quran */
  getQuranMeta() {
    return quran.get("/v1/meta");
  },

  /* Question */
  getQuestion(data) {
    return be.get(
      `questions/?mode=${data.mode}&type=${data.type}&number=${data.number}`
    );
  },
};
