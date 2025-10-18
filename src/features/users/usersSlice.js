import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // action.payload will be the new user object
    },
    // You can add other reducers here for editing, deleting, etc.
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;