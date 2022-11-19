
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div className={s.posts}>
			myposts
			<div>
				<textarea name="" id="" cols="" rows=""></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			<Post message='Hey, how are you?' likeCounter='15' />
			<Post message="It's me first program" likeCounter='23' />
			<Post message="And it's my first using of props" likeCounter='1' />
		</div>
	)
}
export default MyPosts;