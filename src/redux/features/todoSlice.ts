import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TToDo = {
  id:string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TinitialState = {
  todos: TToDo[];
};

export const initialState: TinitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TToDo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removedTodo: (state, action: PayloadAction<string>) => {
    state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo,removedTodo } = todoSlice.actions;
// console.log(todoSlice.reducer);
export default todoSlice.reducer;
