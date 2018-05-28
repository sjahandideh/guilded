<template>
<div class="new-todo">
  <div class="ui right labeled left icon input">
    <i class="pencil icon"></i>
    <input type="text" @keyup="trackSubmit" v-model="task.title" placeholder="Walk fluffy">
    <a class="ui tag label" @click="createTodoItem(task.title)">
      Add Todo
    </a>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NewTodo',
  data () {
    return {
      task: { title: 'Pet Fluffy' }
    }
  },
  methods: {
    ...mapMutations([
      'createTodoItem'
    ]),
    trackSubmit: function (event) {
      if (event.key === 'Enter') {
        this.$store.commit('createTodoItem', this.task.title)
      }
    }
  }
}
</script>

<style scoped>
.new-todo {
  margin: 0;
  margin-top: 40px;
}
</style>
