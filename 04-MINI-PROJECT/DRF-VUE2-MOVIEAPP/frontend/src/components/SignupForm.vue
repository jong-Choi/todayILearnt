<template>
  <form @submit.prevent="submit">
    <fieldset>
      <input
        v-model="username"
        type="text"
        placeholder="이름을 입력해주세요."
      />
      <input v-model="email" type="text" placeholder="이메일을 입력해주세요." />
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <input
        type="password"
        v-model="password2"
        placeholder="비밀번호를 다시 입력해주세요."
      />
      <button type="submit">회원가입</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    submit() {
      const { username, email, password, password2 } = this;
      if (!username || !email || !password || !password2) {
        alert("모든 항목을 입력해주세요.");
      }
      if (password !== password2) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
        // return false;
      }
      this.$emit("submit", { username, email, password, password2 });
    },
  },
};
</script>

<style></style>
