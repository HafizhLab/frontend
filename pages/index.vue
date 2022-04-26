<template>
  <div>
    <div class="pt-3 pb-5 container text-center">
      <h5>Redirecting...</h5>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push("/play");
  },
};
</script>
