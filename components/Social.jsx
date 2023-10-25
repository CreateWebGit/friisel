import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const data = [
	{
		id: 1,
		url: '/',
	},
];

const Social = props => {
	return (
		<div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-3 cursor-pointer hover:scale-105 ease-in duration-300">
			{props.socialtype === 'facebook' && <FaFacebookF />}
			{props.socialtype === 'instagram' && <FaInstagram />}
			{props.socialtype === 'linkedin' && <FaLinkedinIn />}
		</div>
	);
};

export default Social;
