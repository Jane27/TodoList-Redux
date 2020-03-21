import { ADD_TODO, DELETE_TODO, FINISH_TODO, CHANGE_TEXT } from '../constants/action-type';

interface state {
    todos: { no: number; title: string; done: boolean; }[];
    input: {
        title: any;
    }
}

const initialState: state = {
    todos: [
        {
            no: 0,
            title: 'learn redux',
            done: false,
        },
    ],
    input: {
        title: '',
    }
}

const todoReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodos = state.todos;
            const length = newTodos.length;
            newTodos.push({
                no: length,
                ...action.payload.todo,
            });
            return {
                ...state,
                todos: newTodos,
            }
        case FINISH_TODO:
            {
                const index = state.todos.find((todo) => {
                    return todo.no === action.payload.index
                });
                const cloneTodos = state.todos;
                if(index) 
                    cloneTodos[index.no].done = !cloneTodos[index.no].done;
                return { 
                    ...state,
                    todos: cloneTodos,
                }
            }
        case DELETE_TODO:
            {// console.log(action.payload.index)
                const index = state.todos.find((todo) => {
                    return todo.no === action.payload.index
                });
                const cloneTodos = state.todos;
                if (index)
                    cloneTodos.splice(index.no, 1);
                for (var i = 0; i < cloneTodos.length; i++) {
                    cloneTodos[i].no = i;
                }
                return {
                    ...state,
                    todos: cloneTodos,
                }
            }
        case CHANGE_TEXT:
            return {
                ...state,
                input: {
                    title: action.payload.input,
                }
            }
        default:
            return state;
    }
}

export default todoReducer;

