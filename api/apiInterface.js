import { HTTP } from "~/api/config";

export default {
  /* Auth */

  register(data) {
    console.log(data);
    return HTTP.post("/api/v1/auth/registration/", data);
  },
};
