
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} /> {/* передаем профиль из пропосов дальше */}
			<MyPostsContainer /> {/* контейнерная компонента для постов */}
		</div>
	)
}
export default Profile;

