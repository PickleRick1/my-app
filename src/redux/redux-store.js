import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./Reducer/dialogsReducer";
import profileReducer from "./Reducer/profileReducer";
import sidebarReducer from "./Reducer/sidebarReducer";
import usersReducer from "./Reducer/usersReducer";

let store = configureStore({
	reducer: {
		dialogsPage: dialogsReducer,
		profilePage: profileReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer
	}
})
window.store = store;
export default store