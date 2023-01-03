import s from './FormControls.module.css';
import React from 'react';
export const FormControl = ({ input, meta, fieldType, ...props }) => { // дeструктурузируем приходящие пропсы
	const hasError = meta.touched && meta.error; // проверка на то трогали ли инпут и есть ли ошибка
	return (
		<div className={s.formControl + ' ' + (hasError ? s.error : '')}>  {/* если есть ошибка то добавится класс с стилями*/}
			<div>
				{React.createElement(fieldType, { ...input, ...props })}{/* создаем реакт элемент чтоб вся конструкция работала на текстэрии, интпуте и т.д*/}
			</div>
			{hasError && <div><span>{meta.error}</span></div>}  {/* если есть ошибка то добавится блок с ошибкой*/}
		</div>
	)
}
