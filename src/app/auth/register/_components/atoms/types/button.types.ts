export interface ButtonPropsTypes {
	buttonType?: 'submit' | 'button';
	children: React.ReactNode;
	className: string;
	disabled?: boolean;
	href?: string;
	onClick?: () => void;
	title?: string;
}
