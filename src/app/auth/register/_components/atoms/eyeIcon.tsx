import React from 'react';
import { EyeIconPropTypes } from './types/eyeIcon.types';

export const EyeIcon: React.FC<EyeIconPropTypes> = ({visible}) => {
	return visible ? (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
		>
			<path
				fill='#EFF0F4'
				d='M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5'
			/>
		</svg>
	) : (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
		>
			<path
				fill='#EFF0F4'
				d='m9.343 18.782l-1.932-.518l.787-2.939a11 11 0 0 1-3.237-1.872l-2.153 2.154l-1.414-1.414l2.153-2.154a10.96 10.96 0 0 1-2.371-5.07l1.968-.359a9.002 9.002 0 0 0 17.713 0l1.968.358a10.96 10.96 0 0 1-2.372 5.071l2.154 2.154l-1.414 1.414l-2.154-2.154a11 11 0 0 1-3.237 1.872l.788 2.94l-1.932.517l-.788-2.94a11 11 0 0 1-3.74 0z'
			/>
		</svg>
	);
};
