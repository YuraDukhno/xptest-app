import { createStore, combineReducers, applyMiddleware } from "redux";
// import { cashReducer } from "./cashReducer"
// import { costumerReducer } from "./costumerReducer";
import { employeesReducer } from "./employeeReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"


const rootReducer = combineReducers({
  employees: employeesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
