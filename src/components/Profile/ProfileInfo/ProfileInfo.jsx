
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.profile__image} src="https://avatars.mds.yandex.net/i?id=ac60c484f2b28bbad74fb98a161220753732fb0e-4360535-images-thumbs&n=13" alt="img" />
			</div>
			<div className={s.description}> ava</div>
		</div>
	)
}
export default ProfileInfo;