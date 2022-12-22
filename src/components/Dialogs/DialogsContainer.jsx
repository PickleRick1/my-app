
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageAcrionCreator, updateMessageAcrionCreator } from '../../redux/Reducer/dialogsReducer';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import Dialogs from './Dialogs';

/*const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;
	let sendMessage = () => {
		props.store.dispatch(addMessageAcrionCreator());
	};
	let updateMessage = (text) => {
		props.store.dispatch(updateMessageAcrionCreator(text));
	}
	return (
		<Dialogs dialogsPage={state} sendMessage={sendMessage} updateMessage={updateMessage} />
	)
}*/
const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,

	}// стейт что придет в компоненту
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessageAcrionCreator());
		},
		updateMessage: (text) => {
			dispatch(updateMessageAcrionCreator(text));
		}
	} //  диспатчи что придетут в компоненту и которые надо будет поправить
}

/*const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);*/
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthNavigate
)(Dialogs); // composе нужен чтоб избавиться от переменных, в которые оборачивалась б помтоянно компонента. Так у нас есть только один метод,который 2 параментром передает компоненту, а 1 все дейсвтия что будут сделаны над ней.
//делаем контейнерную компоненту,чтоб презентационная меньше знала стейте