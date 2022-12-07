import axios from "axios";
import User from "./User/User";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
const Users = (props) => {
	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => props.setUsers(response.data.items));

	}
	let userElements = props.users.map(u => <User followAC={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} follow={u.follow} src={u.photos.small != null ? u.photos.small : userPhoto} fullname={u.name} status={u.status} />);
	return (

		<div>{userElements}</div>
	)


}

export default Users;