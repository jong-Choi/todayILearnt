<template>
  <div class="post-view">
    <div>
      <h1>{{ post.title }}</h1>
      <span>게시물 번호 {{ post.pk }}</span>
      <strong>{{ post.profile.nickname }} · {{ post.published_date }}</strong>
    </div>
    <p>{{ post.body }}</p>
  </div>
</template>
<script>
export default {
  name: "PostView",
  props: {
    post: {
      type: Object,
      required: true,
      validator(post) {
        const isValidPostId = typeof post.pk === "number";
        const isValidTitle = !!post.title && post.title.length;
        const isValidBody = post.body && post.body.length;
        return isValidPostId && isValidTitle && isValidBody;
      },
    },
  },
};
</script>
