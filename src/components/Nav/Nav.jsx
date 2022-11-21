
import Friends from './Friends/Friends';
import s from './Nav.module.css';
import NavElem from './NavElem/NavElem';

const Nav = (props) => {
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
}
export default Nav;