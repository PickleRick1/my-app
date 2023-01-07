import { createSelectorHook } from "react-redux"

export const recieveUsers = (state) => {
	return state.usersPage.users;
}
/*export const recieveUsers = createSelectorHook(getUsersSelector, (users) => {
	return users.filter(u => true);
})*/
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}
export const getTotalCountPage = (state) => {
	return state.usersPage.totalCountPage;
}
export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}
export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}