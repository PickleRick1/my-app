
import s from './Post.module.css';
const Post = (props) => {
	return (
		<div className={s.item}>
			<div className={s.post__description}>
				<div>
					<img src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/master/w_2560%2Cc_limit/Barasch-Avatar.jpg" alt="" />
				</div>
				<div className={s.post__text}>{props.message}</div>

			</div>
			<div>
				<span>{props.likeCounter} Likes</span>
			</div>
		</div>
	)
}
export default Post;