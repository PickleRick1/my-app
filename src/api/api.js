import axios from "axios";

const instance = axios.create({  // для того чтоб не писать в каждом запросе одно и то же,вынести все в один блок
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '44a9282e-f707-41c4-819b-8a4741c1243e'
	}
});

export const usersAPI = { // вызывается в страничке юзеров
	getUsers(pageSize, currentPage) {  // получаем всех пользователейб где count - количество пользователей что придет в респонсе,
		return instance.get(`users?count=${pageSize}&page=${currentPage}`) // а page передает текущую страницу
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	},
	unfollowUser(id) {  // получаем id пользователя, от которого по сути хотим отписаться, но в реале удаляем его 
		return instance.delete(`follow/` + id)
	},
	followUser(id) {
		return instance.post(`follow/` + id) // получаем id пользователя на которого хотим подписаться
	}
}
export const profileAPI = { // вызывается в страничке профиля
	getProfileOfUser(id) { // получаем профиль того юзера,айди которого пришел к нам с юрл,
		return instance.get(`profile/` + id)
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	},
	getStatusOfUser(id) { // получаем профиль того юзера,айди которого пришел к нам с юрл,
		return instance.get(`profile/status/` + id)
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	},
	updateStatusOfUser(status) { // получаем профиль того юзера,айди которого пришел к нам с юрл,
		return instance.put(`profile/status`, { status })
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	}
}
export const authAPI = { // вызывается в страничке хедера
	getMyProfile() { // получаем профиль того юзера, кука которого есть в браузере на страничке api сервака
		return instance.get(`auth/me`)
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	},
	logout() {  // не передаем инф, все лежит в куке
		return instance.delete(`/auth/login/`)
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	},
	login(email, password, rememberMe = false) {
		return instance.post(`/auth/login`, { email, password, rememberMe })
			.then(response => {
				return response.data; // промис для передачи меньшего кол-ва данных
			})
	}
}