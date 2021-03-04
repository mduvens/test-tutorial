<template>
  <section>
    <div class="form-container">
        <form @submit.prevent="addItem">
        <div>
        <input v-model="state.input" type="text" />
        </div>
        <div>
          <button type="submit" class="submit">Add Todo Item</button>
        </div>
      </form>
    </div>
    <div class="list-container">
      <ul v-for="(Item,index) in state.Items" :key="index">
        <li>
          {{Item}}
          <span style="float:right;padding-right:10px;">
            <button @click="removeItem(index)">X</button>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue';

export default {
setup() {
    const TodoListJS = inject('TodoListJS')
    const { state, addItem, removeItem } = TodoListJS;
    return { state, addItem, removeItem };
  }
};



</script>

<style scoped>
input {
  width: 20%;
  height: 30px;
  border: 2px solid blue;
}
.submit {
  margin: 10px;
  padding: 10px;
  border-radius: 0px;
  border: 0px;
  background: blue;
  color: white;
}
ul li {
  list-style: none;
  border: 2px solid green;
  width: 30%;
  margin-top: 10px;
}
</style>
