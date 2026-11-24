import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import {store} from "@/store/store"

export const useAppSelector = useSelector.withTypes<RootState>();
//  useSelector() significance: it reads a specific piece of state from the Redux store inside a React component.
// useDispatch() sends an action to Redux telling it that something should change.
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();