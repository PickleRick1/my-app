import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import s from './Header.module.css';

const Header = (props) => {
	if (!props.profile) { //если профиль налл или андефайнед покажем крутилку
		return <Preloader />
	}
	return (
		<header className={s.header}>
			<img src='https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9B%D0%BE%D0%B1%D0%BE%D1%81_%D0%A3%D0%9F%D0%9D%D0%A4%D0%9C_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png' alt='img' />
			<div className={s.loginBlock}>
				{props.isAuth ? props.login // если мы авторизованы - покажим логин из пропсов
					:
					<NavLink to={'/login'}>Login</NavLink> // если нет покажем ссыль на стр логина
				}

			</div>
		</header >
	)
}
export default Header;