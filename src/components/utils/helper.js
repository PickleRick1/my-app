export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return items.map(u => {
		if (u[objPropName] === itemId) {//перебиваем всех юзеров и ищем пришеднший айди
			return { ...u, ...newObjProps }; // отписываемся на пришедший с экшн криетора айди
		}
		return u;
	})
}