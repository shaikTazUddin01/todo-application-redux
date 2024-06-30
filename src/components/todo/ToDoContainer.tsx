import { useGetTodosQuery } from "../../redux/api/api";
// import { useAppSelector } from "../../redux/hooks";
import { AddTodo } from "./AddTodoModal";
import { AddFilter } from "./Addfilter";
import TodoCard from "./TodoCard";

const ToDoContainer = () => {


//from local state
  // const {todos}=useAppSelector((state)=>state.todos)

//from server
const {data:todos,isLoading}=useGetTodosQuery(undefined);
console.log(todos);
if (isLoading) {
  return <p>Loading....</p>
}
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <AddTodo></AddTodo>
          {/* <button>Filter</button> */}
          <AddFilter></AddFilter>
        </div>
        <div className="bg-primary-gradient rounded-xl p-[5px] space-y-2 mt-5">
          <div className="bg-[#f8f8f8a4] rounded-lg">
            {/* <div className="bg-white p-2 rounded-md text-center text-xl font-bold">
            <p>There is No Task Pending...!</p>
          </div> */}
          {
            todos?.data?.map(item=><TodoCard {...item} key={item.id}></TodoCard>)
          }
            {/* <TodoCard></TodoCard>
            <TodoCard></TodoCard> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
