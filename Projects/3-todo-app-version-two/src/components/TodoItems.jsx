import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}

      {/* <TodoItem todoDate="4/10/2024" todoName="Go to College"></TodoItem>
      <TodoItem todoDate="Right now" todoName="Like this video"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
