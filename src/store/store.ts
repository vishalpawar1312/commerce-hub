import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/store/slices/usersSlice";
import ordersReducer from "@/store/slices/ordersSlice";
import cartReducer from "@/store/slices/cartSlice";
// The Redux store is the central place that holds the application's global state,
//  and it is configured with the reducers that manage different parts of that state.


// Store → holds the state
// Slice → defines a feature's state + reducers + actions
// Reducer → defines how state changes
// Action → describes what happened
// Dispatch → sends the action to Redux

export const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
    cart: cartReducer
  },
});

// name: "users" in slice identifies the slice, used in generated action types  "users/updateUser"

// users: usersReducer (defines the key in Redux store) e.g state.users


export type RootState = ReturnType<typeof store.getState>;  //to stop repeating Rootstate in every component, make hook for appselector and dispatch