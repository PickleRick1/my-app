import preloader from '../../../assets/images/Hourglass.gif';
import React from 'react';
const Preloader = (props) => { //крутилка загрузки
	return (
		<div> <img src={preloader} alt="preloader" /></div>
	)

}
export default Preloader;