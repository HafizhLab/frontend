<template>
  <div>
    <Header />
    <NavMenu />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import NavMenu from "~/components/navmenu.vue";

export default {
  components: {
    Header,
    NavMenu,
  },
};
</script>
<style>
html {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
