import { observable, action, computed } from "mobx";
import { ApiCall } from "./ApiCall.js";
import { createContext } from "react";

//contains shared functions and state for the app
class AppState {}

const AppStateContext = createContext(new AppState());
export default AppStateContext;
