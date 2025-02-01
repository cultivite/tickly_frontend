'use client';

import React from 'react';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { InputPassword } from '../molecules/inputPassword';
import { RegisterBoxPropTypes } from './types/registerBox.types';
import { RegistrationSchema } from '../../_form-model/register-validation';
import { useFormik } from 'formik';
import { ValidationAlert } from '../atoms/validationAlert';
import { register } from '@/services/auth-api';
import { initialValues } from '../../_form-model/initial-form';

export const RegisterBox: React.FC<RegisterBoxPropTypes> = () => {
	const formik = useFormik({
		initialValues,
		validationSchema: RegistrationSchema,
		onSubmit: async (values) => {
			try {
				const response = await register(
					values.fullname,
					values.username,
					values.email,
					values.phone,
					values.password,
					values.confirm_password
				);
				console.log('Registration successfull', response);
				alert('Registration successfull');
			} catch (error: any) {
				console.error('Error register:', error.response.data);
				alert(`Registration failed: ${error.response.data.message}`);
				throw new Error(`Registration failed: ${error.response.data}`);
			}
		},
	});

	return (
		<div className='w-[35.625rem] bg-deepNavy px-[4.875rem] py-[4rem] rounded-3xl mx-auto'>
			<div className='grid gap-[2.25rem]'>
				<div className='grid gap-[0.75rem] text-center'>
					<h1 className='text-[3rem]'>Get Started</h1>
					<p>New in Tickly? Let’s create an account</p>
				</div>
				<form onSubmit={formik.handleSubmit} className='grid'>
					<div>
						<Input
							label='Full Name'
							id='fullname'
							name='fullname'
							value={formik.values.fullname}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Input your full name'
							inputType='text'
							hasError={
								formik.touched.fullname &&
								!!formik.errors.fullname
							}
						/>
						{formik.touched.fullname && formik.errors.fullname && (
							<ValidationAlert>
								{formik.errors.fullname}
							</ValidationAlert>
						)}
					</div>
					<div>
						<Input
							label='User Name'
							id='username'
							name='username'
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Create your own user name'
							inputType='text'
							hasError={
								formik.touched.username &&
								!!formik.errors.username
							}
						/>
						{formik.touched.username && formik.errors.username && (
							<ValidationAlert>
								{formik.errors.username}
							</ValidationAlert>
						)}
					</div>
					<div>
						<Input
							label='Email'
							id='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='example@email.com'
							inputType='email'
							hasError={
								formik.touched.email && !!formik.errors.email
							}
						/>
						{formik.touched.email && formik.errors.email && (
							<ValidationAlert>
								{formik.errors.email}
							</ValidationAlert>
						)}
					</div>
					<div>
						<Input
							label='Phone'
							id='phone'
							name='phone'
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Input your phone number'
							inputType='text'
							hasError={
								formik.touched.phone && !!formik.errors.phone
							}
						/>
						{formik.touched.phone && formik.errors.phone && (
							<ValidationAlert>
								{formik.errors.phone}
							</ValidationAlert>
						)}
					</div>
					<div>
						<InputPassword
							label='Password'
							id='password'
							name='password'
							placeholder='Create a new strong password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							hasError={
								formik.touched.password &&
								!!formik.errors.password
							}
						/>
						{formik.touched.password && formik.errors.password && (
							<ValidationAlert>
								{formik.errors.password}
							</ValidationAlert>
						)}
					</div>
					<div>
						<InputPassword
							label='Confirm Password'
							id='confirm_password'
							name='confirm_password'
							placeholder='Re-type your new password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.confirm_password}
							hasError={
								formik.touched.confirm_password &&
								!!formik.errors.confirm_password
							}
						/>
						{formik.touched.confirm_password &&
							formik.errors.confirm_password && (
								<ValidationAlert>
									{formik.errors.confirm_password}
								</ValidationAlert>
							)}
					</div>
					<div className='grid gap-[1.5rem]'>
						<Button
							className='rounded-lg bg-crimsonBlaze w-full py-[0.75rem] text-[1.125] font-semibold hover:bg-rosySunset mt-[2rem]'
							buttonType='submit'
						>
							Register
						</Button>
						<div className='text-center'>
							<p>
								Already have an account?{' '}
								<a href='#' className='text-crimsonBlaze'>
									Login
								</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
