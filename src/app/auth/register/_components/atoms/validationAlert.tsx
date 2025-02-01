import React from 'react';
import { ValidationAlertPropTypes } from './types/validationAlert.types';

export const ValidationAlert: React.FC<ValidationAlertPropTypes> = ({
	children,
}) => {
	return <p className='text-rosySunset text-sm'>{children}</p>;
};
