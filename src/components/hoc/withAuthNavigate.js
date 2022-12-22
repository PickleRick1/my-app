import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
let mapStateToPropsToNavigate = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export function withAuthNavigate(Component) {
	const NavigateComponent = (props) => {
		if (!props.isAuth) return <Navigate to='/login' />
		return <Component {...props} />
	}
	let ConnectedAuthNavigateComponent = connect(mapStateToPropsToNavigate)(NavigateComponent);
	return ConnectedAuthNavigateComponent;
}