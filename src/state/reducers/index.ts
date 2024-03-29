import { combineReducers } from "redux";
import reposReducer from '../reducers/reposReducer'

const reducers = combineReducers({
  repositories: reposReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>