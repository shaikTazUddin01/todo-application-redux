import { AddTodo } from "./AddTodoModal";
import TodoCard from "./TodoCard";

const ToDoContainer = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <AddTodo></AddTodo>
          <button>Filter</button>
        </div>
        <div className="bg-primary-gradient rounded-xl p-[5px] space-y-2 mt-5">
          <div className="bg-[#f8f8f8a4] rounded-lg">
            {/* <div className="bg-white p-2 rounded-md text-center text-xl font-bold">
            <p>There is No Task Pending...!</p>
          </div> */}
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
