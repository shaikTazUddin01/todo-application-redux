import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TToDo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TinitialState={
  todos:TToDo[]
}

export const initialState :TinitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<TToDo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const {addTodo } = todoSlice.actions;
// console.log(todoSlice.reducer);
export default todoSlice.reducer;
