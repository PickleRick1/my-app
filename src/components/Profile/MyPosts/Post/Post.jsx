
import s from './Post.module.css';
const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/master/w_2560%2Cc_limit/Barasch-Avatar.jpg" alt="" /> post 1
			<div>
				<span>Like</span>
			</div>
		</div>
	)
}
export default Post;