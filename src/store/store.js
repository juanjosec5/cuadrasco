import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('SET_TODOS', response.data)
    }
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    }
  }
})

export default store
