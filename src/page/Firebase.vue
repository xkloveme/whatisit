<template>
  <div class="">
    <div class="todo-header">
    </div>
    <div class="todo-container">
      <div class="todo-add">
        <div class="todo-add-title">New ToDo:</div>
        <div class="todo-add-input">
          <input
            v-model="newTodo.content"
            placeholder="new todo content"
            @keyup.enter="addTodo"
          />
          <button
            class="todo-add-btn"
            @click="addTodo"
          >Add</button>
        </div>
      </div>

      <div
        class="todo-list"
        :class="{ 'todo-list-center': todos.length===0 }"
      >
        <template v-if="todos.length>0">
          <section
            class="todo-list-item"
            v-for="(item, index) in todos"
            :key="index"
          >
            <template v-if="currentlyEditing === item.id">
              <div class="todo-edit-input">
                <span class="todo-edit-input-label">Edit: </span>
                <input
                  v-model="item.content"
                  placeholder="edit todo content"
                  @keyup.enter="updateTodo(item)"
                />
                <button
                  class="todo-add-btn"
                  @click="updateTodo(item)"
                >Save</button>
              </div>
            </template>
            <template v-else>
              <checkbox
                :checked="item.isComplete"
                :defaultChecked="item.isComplete"
                @change="onChange($event,item)"
              >
                {{ item.content }}
              </checkbox>
              <div>
                <img
                  class="todo-list-item--edit"
                  src="@/assets/edit.svg"
                  alt="Edit todo"
                  @click="editTodo(item)"
                >
                <img
                  class="todo-list-item--del"
                  src="@/assets/delete.svg"
                  alt="Delete todo"
                  @click="deleteTodo(item)"
                >
              </div>
            </template>
          </section>
        </template>

        <div v-else>
          <span>No ToDo List</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { todosCollection } from '@/firebase'
  import uuid from 'uuid'

  export default {
    name: 'todoList',

    data () {
      return {
        todos: [],
        currentlyEditing: '',
        newTodo: {
          content: ''
        }
      }
    },
    firestore: {
      todos: todosCollection.orderBy('createdAt', 'desc')
    },
    methods: {
      onChange (e, res) {
        res.isComplete = e.target.checked
        this.updateTodo(res)
      },
      editTodo (payload) {
        this.currentlyEditing = payload.id
      },
      // 删除
      deleteTodo (payload) {
        todosCollection.doc(payload.id).delete()
      },
      // 更新
      updateTodo (payload) {
        todosCollection
          .doc(payload.id)
          .update({
            ...payload,
            updatedAt: new Date().getTime()
          })
          .then(_ => {
            this.$message.success('Update a todo item successfully !')
            this.currentlyEditing = ''
          })
          .catch(error => {
            this.$message.error( `Update a todo item is ${error}!` )
          })
      },
      // 新增
      addTodo () {
        const { content } = this.newTodo
        if (content) {
          todosCollection
            .add({
              content,
              createdAt: new Date().getTime(),
              isComplete: false,
              id: uuid()
            })
            .then(_ => {
              this.$message.success('Add a todo item successfully !')
              this.newTodo.content = ''
            })
            .catch(error => {
              this.$message.error( `Add a todo item is ${error}!` )
            })
        }
      }
    }
  }
</script>

<style lang="scss">
  .todo {
    line-height: 1.5;
    &-header {
      height: 300px;
      width: 100%;
      background-color: #ff33ae;
    }

    &-container {
      width: 800px;
      margin: 0 auto;
      margin-top: -50px;
    }
    &-add {
      padding: 20px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 1px 5px 10px 0px #ededed;
      &-title {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: bold;
      }

      &-input {
        display: flex;
      }
      &-btn {
        background-color: #ff33ae !important;
        color: #fff !important;
        margin-left: 30px;
      }
    }
    &-edit-input {
      display: flex;
      align-items: center;
      width: 100%;
      &-label {
        display: inline-block;
        width: 60px;
      }
    }

    &-list {
      margin-top: 40px;
      min-height: 500px;
      &-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-item {
        border: 1px solid #dedede;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        span {
          font-size: 16px;
        }
        &:first-child {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        &:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        &--edit {
          margin-right: 15px;
        }
        &--edit,
        &--del {
          cursor: pointer;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
</style>
