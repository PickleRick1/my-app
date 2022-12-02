
import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/Reducer/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let sendPost = () => {
		props.store.dispatch(addPostActionCreator());
	}
	let updatePost = (text) => {
		props.store.dispatch(updatePostActionCreator(text));
	}
	return (
		<MyPosts sendPost={sendPost} updatePost={updatePost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
	)

}
export default MyPostsContainer;