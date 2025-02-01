import React from 'react';
import { InputPropTypes } from './types/input.types';

export const Input: React.FC<InputPropTypes> = ({
	hasError,
	id,
	inputType,
	label,
	name,
	onBlur,
	onChange,
	onKeyDown,
	placeholder,
	value,
}) => {
	return (
		<div className=''>
			<label
				htmlFor={id}
				className='block text-[1rem] mb-[0.5rem] text-softMist'
			>
				{label}
			</label>
			<input
				className={`rounded-lg w-full h-[3rem] px-[1.125rem] border-2 bg-stormyBlue py-[0.75rem] text-[1.125rem] text-softMist ${
					hasError
						? `border-rosySunset`
						: `border-slateGray mb-[1.25rem]`
				}`}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				onBlur={onBlur}
				type={inputType}
			/>
		</div>
	);
};
