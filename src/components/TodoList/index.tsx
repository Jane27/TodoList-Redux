import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';

import { addTodo, changeText, finishTodo, deleteTodo } from '../../actions/todoAction';
import Todo from '../Todo';

const mapStateToProps = (state: any) => ({
    todos: [...state.todoReducer.todos],
    input: state.todoReducer.input,
})
const mapDispatchToProps = (dispatch: any) => ({
    onClick: (input: any) => {
        dispatch(addTodo({
            title: input.title,
            done: false,
        }))
    },
    onDelete: (index: number) => {
        dispatch(deleteTodo(index));
    },
    onInput: (value: string) => {
        dispatch(changeText(value));
    },
    onFinish: (index: number) => {
        dispatch(finishTodo(index));
    }
});

interface props {
    onClick: (input: any) => void;
    onInput: (value: string) => void;
    onDelete: (index: number) => void;
    onFinish: (index: number) => void;
    todos: any;
    input: any;
}

const TodoList = ({ onClick, onInput, onDelete, onFinish, todos, input }: props) => {
    return (
        <div className='todoList'>
            <div className='input'>
                <input type="text" placeholder='請輸入代辦事項' value={input.title} onChange={(e: any) => onInput(e.target.value)} />
                <button onClick={() => onClick(input)}>Add Todo</button>
            </div>
            {
                todos.map((todo: any) =>
                    <Todo key={todo.no} onDelete={onDelete} onFinish={onFinish}  {...todo} />
                )
            }
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);