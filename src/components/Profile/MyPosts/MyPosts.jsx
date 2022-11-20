
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />);
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