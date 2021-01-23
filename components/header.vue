<template>
  <div class="wrapper">
    <!-- Image and text -->
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#" class="box">
        <img
          src="~/assets/img/icon-nav-bar.png"
          alt="AppLogo"
          class="inline-block"
        />
        <h3 class="inline-block">HafizhLab</h3>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
 .wrapper {
     position: sticky;
     top: 0;
     z-index: 1;
 }

 .navbar.navbar-dark.bg-dark{
    background-color: #49C0DB !important;
 }

 .inline-block {
     display: inline-block;
 }

 h3 {
     vertical-align: middle;
     margin-left: .5rem;
     font-family: "Montserrat", sans-serif;
     font-weight: bold;
     margin-bottom: 0;
 }
</style>
