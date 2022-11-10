<template>
  <div class="post-view-page">
    <p>게시글 불러오는 중...</p>
    <router-link>수정</router-link>
    <button>삭제</button>
    <router-link :to="{ name: 'PostListPage' }">목록</router-link>
  </div>
</template>

<script>
export default {
  name: "PostViewPage",
};
</script>
