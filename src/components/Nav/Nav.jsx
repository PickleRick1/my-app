import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<li className={s.menu__item}><a href='/profile'>Profile</a></li>
				<li className={s.menu__item}><a href='/dialogs'>Messages</a></li>
				<li className={s.menu__item}><a href='/news'>News</a></li>
				<li className={s.menu__item}><a href='/music'>Music</a></li>
				<li className={s.menu__item}><a href='/settings'>Settings</a></li>
			</ul>
		</nav>
	)
}
export default Nav;