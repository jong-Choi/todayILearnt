<template>
  <div class="post-list-page">
    <h1>포스트 게시글</h1>
    <post-list :posts="posts" />
    {{ posts }}
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "PostListPage",
  components: { PostList },
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    // api.get("/posts").then((res) => (this.posts = res.data.results));
    this.fetchPostList();
  },
  methods: {
    ...mapActions(["fetchPostList"]),
  },
};
</script>

<style></style>
