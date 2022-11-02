<template>
  <li class="memo-item">
    <strong>{{memo.title}}</strong>
    <!-- <p>{{memo.content}}</p> -->
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">
        {{memo.content}}
      </template>
      <input v-else 
      type="text" 
      ref="content" 
      :value="memo.content"
      @keydown.enter="updateMemo"/>
    </p>
    <button type="button" @click="deleteMemo"><i class="fas fa-times"></i></button>
  </li>
</template>

<script>
export default {
  name: "Memo",
  props: {
    memo: {
      type: Object
    },
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
      deleteMemo(){
        const id = this.memo.id;
        this.$emit('deleteMemo', id);
      },
      handleDblClick() {
        this.isEditing = true;
        this.$nextTick(() =>
          this.$refs.content.focus()
        );
      },
      updateMemo(e) {
        const id = this.memo.id;
        const content = e.target.value.trim();
        if (content.length <= 0) {
          return false;
        }
        this.$emit('updateMemo', {id, content});
        this.isEditing = false;
      }
    },
}
</script>

<style>
  .memo-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    padding: 24px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    list-style: none;
  }
  .memo-item button {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e5e5;
    border: 0;
  }
  .memo-item strong {
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: normal;
    word-break: break-all;
  }
  .memo-item p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    border: 1px solid #999;
  }
</style>