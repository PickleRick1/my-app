
import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { getProfile } from '../../redux/Reducer/profileReducer';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';

export function withRouter(Children) { // функция получения параметра с урла
	return (props) => {

		const match = { params: useParams() }; // присваиваем матчу объект который содержить параматры,в которых лежит айди
		return <Children {...props} match={match} /> // передаем пропсы любой компоненте которая вызвоет эту функцию
	}
}
class ProfileContainer extends React.Component {
	componentDidMount = () => { // компонента вмонтировалась
		let userId = this.props.match.params.userId || 2; // получаем айдишник юзера,по которму мы щелкнули с урла
		this.props.getProfile(userId); // отправляем запрос в блл который там санку делает
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
		isAuth: state.auth.isAuth,
	} // стейт что придет в компоненту
}


export default compose(
	connect(mapStateToProps, { getProfile }),
	withRouter,
	withAuthNavigate
)(ProfileContainer); // composе нужен чтоб избавиться от переменных, в которые оборачивалась б помтоянно компонента. Так у нас есть только один метод,который 2 параментром передает компоненту, а 1 все дейсвтия что будут сделаны над ней.

/*connect(mapStateToProps, { getProfile })(withRouter(withNavigate));*/
//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы