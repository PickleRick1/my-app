
import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from '../../redux/Reducer/profileReducer';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { withRouter } from '../hoc/withRouter';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
	componentDidMount = () => { // компонента вмонтировалась
		let userId = this.props.match.params.userId || 27186; // получаем айдишник юзера,по которму мы щелкнули с урла
		this.props.getProfile(userId); // отправляем запрос в блл который там санку делает
		this.props.getStatus(userId);

	}

	render() {

		return <Profile {...this.props} /> // рендерим профиль, передаем профиль черех спред чтоб не писать все вручную
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
		newPostText: state.profilePage.newPostText,
		status: state.profilePage.status
	} // стейт что придет в компоненту
}


export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
	withRouter,
	withAuthNavigate
)(ProfileContainer); // composе нужен чтоб избавиться от переменных, в которые оборачивалась б помтоянно компонента. Так у нас есть только один метод,который 2 параментром передает компоненту, а 1 все дейсвтия что будут сделаны над ней.

/*connect(mapStateToProps, { getProfile })(withRouter(withNavigate));*/
//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы