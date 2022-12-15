
import Profile from './Profile';
import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setProfile } from '../../redux/Reducer/profileReducer';
class ProfileContainer extends React.Component {
	componentDidMount = () => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export default connect(mapStateToProps, { setProfile })(ProfileContainer);