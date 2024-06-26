const TodoCard = () => {
  return (
    <div className="  flex justify-between items-center rounded-md py-2 px-5 border-b">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Todo Title</p>
      <p className="font-medium">Time</p>
      <p className="font-medium">Description</p>
      <div className="">
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
