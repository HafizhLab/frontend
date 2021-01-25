<template>
  <h5 class="mt-5 text-center">Room Code: {{ $route.params.code }}</h5>
</template>

<script>
export default {
  validate({ params, redirect }) {
    if (params.code == "" || params.code.length != 4)
      redirect({ name: "play-multiplayer" });
    return true;
  },
};
</script>

<style></style>
