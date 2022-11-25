
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} addMessage={store.addMessage.bind(store)} updateMessage={store.updateMessage.bind(store)} addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)} />
			</BrowserRouter>
		</React.StrictMode >
	);
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
