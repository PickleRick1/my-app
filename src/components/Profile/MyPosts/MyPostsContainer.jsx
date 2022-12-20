
import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/Reducer/profileReducer'
import MyPosts from './MyPosts';

/*const MyPostsContainer = (props) => {
	let state = props.store.getState().profilePage;
	let sendPost = () => {
		props.store.dispatch(addPostActionCreator());
	}
	let updatePost = (text) => {
		props.store.dispatch(updatePostActionCreator(text));
	}
	return (
		<MyPosts sendPost={sendPost} updatePost={updatePost} posts={state.posts} newPostText={state.newPostText} />
	)
}*/
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	} // стейт что придет в компоненту
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendPost: () => {
			dispatch(addPostActionCreator());
		},
		updatePost: (text) => {
			dispatch(updatePostActionCreator(text));
		}
	} //  диспатчи что придетут в компоненту и которые надо будет поправить
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
//делаем контейнерную компоненту,чтоб презентационная меньше знала стейте