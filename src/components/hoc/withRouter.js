import { useParams } from 'react-router-dom';

export function withRouter(Children) { // функция получения параметра с урла
	return (props) => {

		const match = { params: useParams() }; // присваиваем матчу объект который содержить параматры,в которых лежит айди
		return <Children {...props} match={match} /> // передаем пропсы любой компоненте которая вызвоет эту функцию
	}
}