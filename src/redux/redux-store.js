import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./Reducer/dialogsReducer";
import profileReducer from "./Reducer/profileReducer";
import sidebarReducer from "./Reducer/sidebarReducer";

let store = configureStore({
	reducer: {
		dialogsPage: dialogsReducer,
		profilePage: profileReducer,
		sidebarPage: sidebarReducer,
	}
})

export default store