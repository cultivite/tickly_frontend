'use client';

import React, { useState } from 'react';
import { InputPasswordPropTypes } from './types/inputPassword.types';
import { Input } from '../atoms/input';
import { EyeIcon } from '../atoms/eyeIcon';
import { Button } from '../atoms/button';

export const InputPassword: React.FC<InputPasswordPropTypes> = ({
	label,
	placeholder,
	value,
	onChange,
	onBlur,
	name,
	hasError,
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='relative'>
			<Input
				label={label}
				name={name}
				placeholder={placeholder}
				inputType={showPassword ? 'text' : 'password'}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				hasError={hasError}
			/>
			<Button
				className='absolute right-[1.125rem] top-[2.75rem]'
				onClick={togglePasswordVisibility}
				title={showPassword ? 'Hide password' : 'Show password'}
				buttonType='button'
			>
				<EyeIcon visible={showPassword} />
			</Button>
		</div>
	);
};
