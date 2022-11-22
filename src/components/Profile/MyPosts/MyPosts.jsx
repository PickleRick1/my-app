
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
	let newPostElement = React.createRef();
	let postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);
	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}
	return (
		<div className={s.posts}>
			myposts
			<div>
				<textarea ref={newPostElement}></textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{postElements}
		</div>
	)
}
export default MyPosts;