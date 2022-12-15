
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img className={s.wrapper__image} src="https://avatars.mds.yandex.net/i?id=ac60c484f2b28bbad74fb98a161220753732fb0e-4360535-images-thumbs&n=13" alt="img" />
			</div>
			<div className={s.profile__image}>
				<div ><img src={props.profile.photos.large} alt="" /></div>
				<div><p>{props.profile.fullName}</p></div>
				<div><p>{props.profile.lookingForAJob}</p></div>
				<div><p>{props.profile.lookingForAJobDescription}</p></div>
				<div><p>{props.profile.contacts.github}</p></div>
			</div>
		</div>
	)
}
export default ProfileInfo;