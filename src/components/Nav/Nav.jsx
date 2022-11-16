import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<li className={s.menu__item}><NavLink to='/profile' className={navData => navData.isActive ? s.active : undefined}>Profile</NavLink></li>
				<li className={s.menu__item}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : undefined}>Messages</NavLink></li>
				<li className={s.menu__item}><NavLink to='/news' className={navData => navData.isActive ? s.active : undefined}>News</NavLink></li>
				<li className={s.menu__item}><NavLink to='/music' className={navData => navData.isActive ? s.active : undefined}>Music</NavLink></li>
				<li className={s.menu__item}><NavLink to='/settings' className={navData => navData.isActive ? s.active : undefined}>Settings</NavLink></li>
			</ul>
		</nav >
	)
}
export default Nav;