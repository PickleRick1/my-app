
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'Hey, how are you?', likeCounter: 15 },
		{ id: 2, message: "It's me first program", likeCounter: 23 },
		{ id: 3, message: "And it's my first using of props", likeCounter: 1 },
	]
	let postElements = posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);
	return (
		<div className={s.posts}>
			myposts
			<div>
				<textarea name="" id="" cols="" rows=""></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			{postElements}
		</div>
	)
}
export default MyPosts;