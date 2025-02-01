import React from 'react';
import { ButtonPropsTypes } from './types/button.types';

export const Button: React.FC<ButtonPropsTypes> = ({
	buttonType,
	children,
	className,
	onClick,
	title,
}) => {
	return (
		<button
			className={className}
			onClick={onClick}
			title={title}
			type={buttonType}
		>
			{children}
		</button>
	);
};
