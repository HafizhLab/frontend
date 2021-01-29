<template>
  <div></div>
</template>

<script>
import cookie from "js-cookie";

export default {
  created() {
    cookie.remove("token");
    this.$store.commit("SET_USER", null);
    this.$router.push({
      path: "/login",
    });
  },
};
</script>
