import axios from '@/config/axios/public.instance';

export const login = async (username: string, password: string) => {
	const response = await axios.post('/auth/login', { username, password });
	return response.data;
};

export const register = async (
	fullname: string,
	username: string,
	email: string,
	phone: string,
	password: string,
	confirm_password: string
) => {
	const response = await axios.post('/auth/register', {
		fullname,
		username,
		email,
		phone,
		password,
		confirm_password,
	});
	return response.data;
};
