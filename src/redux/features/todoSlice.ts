import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
console.log(todoSlice.reducer);
export default todoSlice.reducer;
