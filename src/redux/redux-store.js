import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./Reducer/dialogsReducer";
import profileReducer from "./Reducer/profileReducer";
import sidebarReducer from "./Reducer/sidebarReducer";
import usersReducer from "./Reducer/usersReducer";
import authReducer from "./Reducer/authReducer";

let store = configureStore({  // стор через тулкит
	reducer: {
		dialogsPage: dialogsReducer, // присваиваем каждой страничке свой редьюсер, который сформирует наш стор 
		profilePage: profileReducer,
		sidebarPage: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
	}
})
window.store = store; // чтоб видеть стор в консольке
export default store