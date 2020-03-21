import * as React from "react";
import "./index.scss";

interface IProps {
  no: number;
  title: string;
  done: boolean;
  onDelete: (index: number) => void;
  onFinish: (index: number) => void;
}

const TodoItem:React.FC<IProps> =({ no, title, done, onDelete, onFinish }) => {
  const isDone = done ? "todo done" : "todo";
  return (
    <div className={isDone}>
      <div className="block no">{`NO. ${no}`}</div>
      <div className="block checkbox">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => onFinish(no)}
        />
      </div>
      <div className="block title">{`${title}`}</div>
      {!done && (
        <div className="block delete">
          <div onClick={() => onDelete(no)}>delete</div>
        </div>
      )}
    </div>
  );
};

export default React.memo(TodoItem);
