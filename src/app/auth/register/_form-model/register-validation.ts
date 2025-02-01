import * as Yup from 'yup';

const uppercaseRule = /^(?=.*[A-Z])/;
const lowercaseRule = /^(?=.*[a-z])/;
const numberRule = /^(?=.*\d)/;
const symbolRule = /^(?=.*[\W_])/;
const phoneNumberRule = /^[+]?[0-9]{10,13}$/;
const usernameRule = /^[a-zA-Z0-9-_.]+$/;

export const RegistrationSchema = Yup.object().shape({
	fullname: Yup.string()
		.required('Full Name is required')
		.min(6, 'Too short')
		.max(60, 'Too long'),
	username: Yup.string()
		.required('User Name is required')
		.matches(
			usernameRule,
			'Username can only contain letters, numbers, hyphens (-), underscores (_), and dots (.)'
		)
		.min(6, 'Too short')
		.max(20, 'Too long'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email address is required'),
	phone: Yup.string()
		.matches(
			phoneNumberRule,
			'Phone number must be between 10 to 13 digits'
		)
		.required('Phone number is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters long')
		.matches(
			uppercaseRule,
			'Password must contain at least 1 uppercase letter'
		)
		.matches(
			lowercaseRule,
			'Password must contain at least 1 lowercase letter'
		)
		.matches(numberRule, 'Password must contain at least 1 number')
		.matches(
			symbolRule,
			'Password must contain at least 1 special character'
		)
		.required('Password is required'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password')], 'Password must match')
		.required('Confirm password is required'),
});
