import { NavLink } from 'react-router-dom';
import s from './../Nav.module.css';

const NavElem = (props) => {
	return (
		<li className={s.menu__item}><NavLink to={props.path} className={navData => navData.isActive ? s.active : undefined}>{props.link}</NavLink></li>
	)
}
export default NavElem;