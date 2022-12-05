import User from "./User/User";
import s from './Users.module.css';
const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{ id: 1, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', fullname: 'Dmitry', status: 'Ok', location: { country: 'Belarus', city: 'Minsk' } },
			{ id: 2, follow: false, avatar: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', fullname: 'Elena', status: 'Ok', location: { country: 'Russia', city: 'Simpheropol' } },
			{ id: 3, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', fullname: 'Lesya', status: 'Ok', location: { country: 'Russia', city: 'Yenakievo' } }
		])
	}
	let userElements = props.users.map(u => <User followAC={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} follow={u.follow} src={u.avatar} fullname={u.fullname} status={u.status} country={u.location.country} city={u.location.city} />);
	return (

		<div>{userElements}</div>
	)


}

export default Users;