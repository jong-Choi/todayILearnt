<template>
  <form @submit.prevent="submit">
    <fieldset>
      <input
        v-model="username"
        type="text"
        placeholder="사용자명을 입력해주세요."
      />
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <button type="submit">로그인</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "SigninForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      const { username, password } = this;
      this.$emit("submit", { username, password });
    },
  },
};
</script>
