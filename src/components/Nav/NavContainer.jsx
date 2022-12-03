
import { connect } from 'react-redux';
import Nav from './Nav';


/*const Nav = (props) => {
	let navElements = props.sidebar.paths.map(l => <NavElem path={l.path} link={l.nameLink} />);
	let friendsElements = props.sidebar.friends.map(f => <Friends imgSrc={f.imgSrc} name={f.name} />);
	return (

		<nav className={s.nav}>
			<ul className={s.menu}>
				{navElements}
			</ul>
			<div className={s.friends}>
				<h3 className={s.friends__title}>Friends</h3>
				<div className={s.friends__items}>
					{friendsElements}
				</div>
			</div>
		</nav >
	)
}*/
const mapStateToProps = (state) => {
	debugger
	return {
		paths: state.sidebarPage.paths,
		friends: state.sidebarPage.friends
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;