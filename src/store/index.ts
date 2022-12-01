import type {Todo} from "@/types";
import {createStore} from "vuex";

const STORE_KEY = 'tdk'

const store = createStore({
    state: JSON.parse(localStorage.getItem(STORE_KEY) || '{\n' +
        '        todos: []\n' +
        '    }'),
    mutations: {
        setTodos(state, items: Todo[]) {
            state.todos = items
            localStorage.setItem(STORE_KEY, JSON.stringify(state))
        }
    }
})

export default store