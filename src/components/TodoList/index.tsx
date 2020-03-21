import * as React from "react";
import { connect } from "react-redux";
import "./index.scss";

import {
  addTodo,
  changeText,
  finishTodo,
  deleteTodo
} from "../../actions/todoAction";
import Todo from "../TodoItem";

interface IProps {
  onClick: (input: any) => void;
  onInput: (value: string) => void;
  onDelete: (index: number) => void;
  onFinish: (index: number) => void;
  todos: Array<any>;
  input: any;
}

const TodoList: React.FC<IProps> = ({
  onClick,
  onInput,
  onDelete,
  onFinish,
  todos,
  input
}) => {
  return (
    <div className="todoList">
      <div className="input">
        <input
          type="text"
          placeholder="Input Todo Item"
          value={input.title}
          onChange={(e: any) => onInput(e.target.value)}
        />
        <button onClick={() => onClick(input)}>Add Todo</button>
      </div>
      {todos.map((todo: any) => (
        <Todo key={todo.no} onDelete={onDelete} onFinish={onFinish} {...todo} />
      ))}
      <div className="text">
        <span>Total: {todos.length}</span>
        <span>Completed: {todos.filter(i => i.done).length}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: [...state.todoReducer.todos],
  input: state.todoReducer.input
});
const mapDispatchToProps = (dispatch: any) => ({
  onClick: (input: any) => {
    dispatch(
      addTodo({
        title: input.title,
        done: false
      })
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
