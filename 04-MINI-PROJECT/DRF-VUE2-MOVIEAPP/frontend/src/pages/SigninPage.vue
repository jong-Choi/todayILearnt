<template>
  <div class="sign-in-page">
    <h3>로그인</h3>
    <signin-form @submit="onSubmit" />
    <p>
      회원이 아니신가요?
      <router-link :to="{ name: 'SignupPage' }">회원가입 하러가기</router-link>
    </p>
  </div>
</template>

<script>
import SigninForm from "@/components/SigninForm";
// import { mapActions } from "vuex";
import api from "@/api";

export default {
  name: "SigninPage",
  methods: {
    onSubmit(payload) {
      const { username, password } = payload;
      api
        .post("/users/login/", { username, password })
        .then((res) => {
          api.defaults.headers.common.Authorization = `Bearer${res.data.token}`;
          alert("로그인이 완료되었습니다.");
          this.$router.push({ name: "PostListPage" });
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  },
  components: {
    SigninForm,
  },
};
</script>
