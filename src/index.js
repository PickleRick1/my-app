import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  { id: 1, message: 'Hey, how are you?', likeCounter: 15 },
  { id: 2, message: "It's me first program", likeCounter: 23 },
  { id: 3, message: "And it's my first using of props", likeCounter: 1 },
]
let dialogs = [
  { id: 1, name: 'Dyma' },
  { id: 2, name: 'Lesya' },
  { id: 3, name: 'Daria' },
  { id: 4, name: 'Vlad' },
  { id: 5, name: 'Arthur' },
  { id: 6, name: 'Sofia' },
]
let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
