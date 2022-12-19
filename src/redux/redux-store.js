import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./Reducer/dialogsReducer";
import profileReducer from "./Reducer/profileReducer";
import sidebarReducer from "./Reducer/sidebarReducer";
import usersReducer from "./Reducer/usersReducer";
import authReducer from "./Reducer/authReducer";

let store = configureStore({
	reducer: {
		dialogsPage: dialogsReducer,
		profilePage: profileReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
	}
})
window.store = store;
export default store