export interface InputPasswordPropTypes {
	className?: string;
	hasError?: boolean;
	id?: string;
	label?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
	placeholder?: string;
	title?: string;
	name?: string;
	value?: string;
}
