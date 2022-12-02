
import React from 'react';
import { addMessageAcrionCreator, updateMessageAcrionCreator } from '../../redux/Reducer/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState();
	let sendMessage = () => {
		props.store.dispatch(addMessageAcrionCreator());
	};
	let updateMessage = (text) => {
		props.store.dispatch(updateMessageAcrionCreator(text));
	}
	return (
		<Dialogs dialogsPage={state.dialogsPage} sendMessage={sendMessage} updateMessage={updateMessage} />
	)
}
export default DialogsContainer;