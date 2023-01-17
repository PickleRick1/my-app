import { Field } from "redux-form";
export const createField = (placeholder, name, component, validators, props = {}, text = '') => {
	return <div>
		<Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} />{text}
	</div>
}