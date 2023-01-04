import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../FormControls/FormControls";
import { required } from "../utils/validations";
import { login } from "../../redux/Reducer/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from '../FormControls/FormControls.module.css';
const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder={'login'} name={'email'} component={FormControl} validate={[required]} fieldType={'input'} /></div>
			<div><Field placeholder={'password'} name={'password'} component={FormControl} validate={[required]} fieldType={'input'} /></div>
			<div><Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me</div>
			<div><button>Login</button></div>
			{props.error && <div className={s.formSummaryerror}>{props.error}</div>}
		</form>

	)
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to='/profile' />
	}
	return (

		<div>
			<h1>
				Login
			</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
}
export default connect(mapStateToProps, { login })(Login);