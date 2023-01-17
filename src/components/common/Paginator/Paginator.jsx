
import React from 'react';

import s from './Paginator.module.css';
const Paginator = ({ totalCount, pageSize, currentPage, onPageChange }) => {
	let pageCount = Math.ceil(totalCount) / pageSize; // делим общее кол-во пользователей на количество выодимых
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i); // запихиваем количество стр с деления в массив
	}
	return (pages.map((p, i) => { //перебор всех стр
		return <span className=
			{currentPage === p ? s.selectedPage : undefined} // если текущая стр - подсветить ее
			onClick={(e) => { onPageChange(p) }}>{' ' + p + ' '}</span> // по клику вызываем функцию onPageChange и передаем стр на какую кликнли

	}))
}
export default Paginator;