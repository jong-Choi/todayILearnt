<template>
  <div class="post-view-page">
    <div v-if="post" :post="post" />
  </div>
</template>

<script>
export default {
  name: "PostViewPage",
};
</script>
