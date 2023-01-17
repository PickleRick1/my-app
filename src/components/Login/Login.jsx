import React from "react";
import { reduxForm } from "redux-form";
import { FormControl } from "../FormControls/FormControls";
import { required } from "../utils/validations";
import { login } from "../../redux/Reducer/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from '../FormControls/FormControls.module.css';
import { createField } from "../common/createrField";
/*<div><Field placeholder={'login'} name={'email'} component={FormControl} validate={[required]} fieldType={'input'} /></div>
			<div><Field placeholder={'password'} name={'password'} component={FormControl} validate={[required]} fieldType={'input'} /></div>
			<div><Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me</div>*/
const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Login', 'email', FormControl, [required], { fieldType: 'input', })}
			{createField('Password', 'password', FormControl, [required], { fieldType: 'input', type: 'password' })}
			{createField(null, 'rememberMe', 'input', [], { type: 'checkbox' }, 'remember me')}

			<div><button>Login</button></div>
			{error && <div className={s.formSummaryerror}>{error}</div>}
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