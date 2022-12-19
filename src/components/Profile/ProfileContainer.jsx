
import Profile from './Profile';
import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setProfile } from '../../redux/Reducer/profileReducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
	return (props) => {

		const match = { params: useParams() };
		return <Children {...props} match={match} />
	}
}
class ProfileContainer extends React.Component {
	componentDidMount = () => {
		let userId = this.props.match.params.userId || 2;
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setProfile(response.data);
			})
	}
	render() {

		return <Profile {...this.props} />
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
		newPostText: state.profilePage.newPostText
	}
}
export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));