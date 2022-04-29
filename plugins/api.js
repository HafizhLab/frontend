export default function ({ $axios, $config }, inject) {
  const be = $axios.create({
    baseURL: $config.baseURLBackend,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const quran = $axios.create({
    baseURL: $config.baseURLQuran,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const auth = $axios.create({
    baseURL: $config.baseURLAuth,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const apiInterface = {
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
    getQuestion(params) {
      return be.get("/questions/", { params: params });
    },
  };

  // Inject to context as $apiInterface
  inject("apiInterface", apiInterface);
}
