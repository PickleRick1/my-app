
import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setUserData, setCurrentProfile } from '../../redux/Reducer/authReducer';
import Header from './Header';
import { current } from '@reduxjs/toolkit';

class HeaderContainer extends React.Component {
	componentDidMount = () => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true,
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					this.props.setUserData(id, email, login);
					axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
						.then(response => {
							this.props.setCurrentProfile(response.data);
						})
					debugger
				}

			})
	}
	render() {

		return <Header {...this.props} />
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
		profile: state.auth.currentProfile
	}
}
export default connect(mapStateToProps, { setUserData, setCurrentProfile })(HeaderContainer);