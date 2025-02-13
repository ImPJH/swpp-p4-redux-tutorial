import "./Todo.css";

interface IProps {
  title: string;
  clickDetail?: React.MouseEventHandler<HTMLDivElement>; // Defined by React
  clickDone?: () => void;
  clickDelete?: () => void;
  done: boolean;  
}

const Todo = (props: IProps) => {
  return (
    <div className="Todo">
      <div className={`text ${props.done && "done"}`} onClick={props.clicked}>
        {props.title}
      </div>
      {props.done && <div className="done-mark">&#x2713;</div>}
    </div>
  );
};
export default Todo;
