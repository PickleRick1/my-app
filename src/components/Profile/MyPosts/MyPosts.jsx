
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div> myposts
			<Post message='Hey, how are you?' likeCounter='15' />
			<Post message="It's me first program" likeCounter='23'/>
			<Post message="And it's my first using of props" likeCounter='1'/>
		</div>
	)
}
export default MyPosts;