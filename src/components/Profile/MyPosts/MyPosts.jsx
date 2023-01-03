
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validations';
import { FormControl } from '../../FormControls/FormControls';
const maxLength20 = maxLength(20);
const ProfileTextarea = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newPostBody' component={FormControl} validate={[required, maxLength20]} placeholder='Post message' fieldType={'textarea'} /></div>
			{/*onChange вызывает колбек при каждом изменении поля ввода,то есть на каждый символ. Велью - прошитое поле,еоторое лежит в стейте и меняется на каждый символ */}
			<div><button>Add post</button></div>
		</form>
	)
}
const MyPosts = (props) => {

	/*onChange={onMessageChange} value={props.dialogsPage.newMessageText} onClick={addMessage}*/
	const ProfileReduxTextarea = reduxForm({ form: 'profilePost' })(ProfileTextarea);
	let postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />); // перебиврает все элементы и добавляет каждому пропсы
	let addPost = (values) => {
		props.sendPost(values.newPostBody); // функция из пропсов ,которая вызовет экшн криетор,где редьюсер добавит новый пост
	}
	/*let onPostChange = () => { // колбэк который вызывается при изменении  поля ввода
		let text = newPostElement.current.value; // текущее велью в поле ввода
		props.updatePost(text); // функция из пропсов ,которая вызовет экшн криетор,передаст туда велью и дальше редьюсер обновит стейт
	}*/
	return (
		<div className={s.posts}>
			myposts
			<ProfileReduxTextarea onSubmit={addPost} />
			{postElements}
		</div>
	)

}
export default MyPosts;
/*<div>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
				{/* реф - ссылка через которую мы получаем текущую валью(надо от нее избавится).Ончанже вызывает колбек при каждом изменении поля ввода,то есть на каждый символ. Велью - прошитое поле,еоторое лежит в стейте и меняется на каждый символ }
				</div>
				<div>
					<button onClick={addPost}>Add post</button>{/* при клике вызывает колбэк который отошлет пост в стейт и добавит на стену }
				</div> */