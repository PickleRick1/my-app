
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
	return (
		<div>
			<div><img src="https://avatars.mds.yandex.net/i?id=ac60c484f2b28bbad74fb98a161220753732fb0e-4360535-images-thumbs&n=13" alt="img" /></div>
			<div> ava</div>
			<MyPosts />
		</div>
	)
}
export default Profile;