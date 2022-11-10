<template>
  <div>
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 60%" />
        <col style="width: 10%" />
        <col style="width: 20%" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.pk">
          <td scope="col">{{ post.pk }}</td>
          <td scope="col">
            <router-link
              :to="{
                name: 'PostViewPage',
                params: { postId: post.pk.toString() },
              }"
              >{{ post.title }}</router-link
            >
            [{{ post.comments.length }}]
          </td>
          <td scope="col">{{ post.profile.nickname }}</td>
          <td scope="col">{{ post.published_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
