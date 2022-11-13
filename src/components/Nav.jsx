import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<li className={s.menu__item}><a href='#'>Profile</a></li>
				<li className={s.menu__item}><a href='#'>Messages</a></li>
				<li className={s.menu__item}><a href='#'>News</a></li>
				<li className={s.menu__item}><a href='#'>Music</a></li>
				<li className={s.menu__item}><a href='#'>Settings</a></li>
			</ul>
		</nav>
	)
}
export default Nav;