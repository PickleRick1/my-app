
import React, { useState } from 'react';

import s from './Paginator.module.css';
const Paginator = ({ totalCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
	let pageCount = Math.ceil(totalCount) / pageSize; // делим общее кол-во пользователей на количество выодимых
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i); // запихиваем количество стр с деления в массив
	}
	let portionsCount = Math.ceil(pageCount / portionSize); // делим количество страниц на то количество которое мы хотим видеть
	let [portionNumber, setPortionNumber] = useState(1); // количество порций, становление количества порций, изначально 1
	let leftBorder = (portionNumber - 1) * portionSize + 1; // левая граница порции, то есть 1 для первой порции, 11 для второй
	let rightBorder = portionNumber * portionSize; // правая граница порции, то есть 10 для первой порции, 20 для второй
	return (


		<div>
			<div>
				{portionNumber > 1 &&
					<button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
			</div>


			{
				pages
					.filter(p => p >= leftBorder && p <= rightBorder)

					.map((p, i) => { //перебор всех стр
						return <span className=
							{currentPage === p ? s.selectedPage : undefined} key={p}// если текущая стр - подсветить ее
							onClick={(e) => { onPageChange(p) }}>{' ' + p + ' '}</span> // по клику вызываем функцию onPageChange и передаем стр на какую кликнли}
					})}
			<div>
				{portionsCount > portionNumber &&
					<button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
			</div>
		</div>





	)
}
export default Paginator;