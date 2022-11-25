
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
	let newPostElement = React.createRef();
	let postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);
	let addPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updatePost(text);
	}
	debugger
	return (
		<div className={s.posts}>
			myposts
			<div>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />

			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{postElements}
		</div>
	)

}
export default MyPosts;