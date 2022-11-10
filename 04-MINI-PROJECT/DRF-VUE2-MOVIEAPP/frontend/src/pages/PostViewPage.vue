<template>
  <div class="post-view-page">
    {{ postId }}
    <post-view v-if="post" :post="post" />
    <p v-else>게시글을 불러오는 중...</p>
    <router-link :to="{ name: 'PostListPage' }">목록</router-link>
  </div>
</template>

<script>
import PostView from "@/components/PostView.vue";

import { mapActions, mapState } from "vuex";

export default {
  components: { PostView },
  name: "PostViewPage",
  computed: {
    ...mapState(["post"]),
  },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  created() {
    this.fetchPost(this.postId).catch((err) => {
      alert(err.response.data.msg);
      this.$router.back();
    });
  },
  methods: {
    ...mapActions(["fetchPost"]),
  },
};
</script>
