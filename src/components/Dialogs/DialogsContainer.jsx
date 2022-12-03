
import React from 'react';
import { connect } from 'react-redux';
import { addMessageAcrionCreator, updateMessageAcrionCreator } from '../../redux/Reducer/dialogsReducer';
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
		dialogsPage: state.dialogsPage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessageAcrionCreator());
		},
		updateMessage: (text) => {
			dispatch(updateMessageAcrionCreator(text));
		}
	}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;