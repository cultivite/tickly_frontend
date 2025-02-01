export interface InputPropTypes {
	hasError?: boolean;
	id?: string;
	inputType?: string;
	label?: string;
	name?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	title?: string;
	value?: string;
}
