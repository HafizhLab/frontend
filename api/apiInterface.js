import { HTTP } from "~/api/config";

export default {
  /* Auth */

  register(data) {
    return HTTP.post("/api/v1/auth/registration/", data);
  },

  login(data) {
    return HTTP.post("/api/v1/auth/login/", data);
  },

  verifyToken(data) {
    return HTTP.post("/api/v1/auth/token/verify/", data);
  },
};
