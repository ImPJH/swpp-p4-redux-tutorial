import "./TodoDetail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTodo, todoActions, fetchTodo } from "../../store/slices/todo";
import { AppDispatch } from "../../store";

const TodoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todoState = useSelector(selectTodo);
  useEffect(() => {
  dispatch(todoActions.getTodo({ targetId: Number(id) }));
  }, [dispatch, id]);
  return (
    <div className="TodoDetail">
      <div className="row">
        <div className="left">Name:</div>
        <div className="right">{todoState.selectedTodo?.title}</div>
      </div>
      <div className="row">
        <div className="left">Content:</div>
        <div className="right">{todoState.selectedTodo?.content}</div>
      </div>
    </div>
  );
};
export default TodoDetail;
