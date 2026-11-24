import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "John",
    email: "john@gmail.com",
    role: "customer",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@gmail.com",
    role: "customer",
    status: "Inactive",
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@gmail.com",
    role: "customer",
    status: "Active",
  },
];
const initialState = users;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex(
        (user) => user.id === updatedUser.id
      );

      if (index !== -1) {
        state[index] = updatedUser;
      }
    },
    deleteUser: (state, action) => {
   
      // Redux Toolkit automatically creates something conceptually like:
      // deleteUser(userId)
      // which produces an action:
      // {
      //   type: "users/deleteUser",
      //   payload: userId 
      // }
      // that why we take here action.payload 
      const userId = action.payload;
      return state.filter(state => state.id === userId)
      

      // Another method
      // const index = state.findIndex(
      //   (user) => user.id === userId
      // )
      // if(index !== -1){
      //   state.splice(index, 1)
      // }
        //  0  1  2
        // index = 1
        // splice(1, 1)
        // state = [A, C]
    }
  }, 
});

export const selectUserById = (state: RootState, userId: string) => (
  state.users.find((user)=> user.id === userId)
);

export const {updateUser, deleteUser} = usersSlice.actions
export default usersSlice.reducer;