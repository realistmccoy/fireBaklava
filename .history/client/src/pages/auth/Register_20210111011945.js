import React from 'react';

const Register = () => {
	const registerForm = () => {
		<p>register form</p>;
	};

	return (
		<div className='container p-5'>
			<div class='row'>
				<div class='col-md-6 offset-md-3'>
					<h4>Register</h4>
					
					{registerForm()}
				</div>
			</div>
		</div>
	);
};

export default Register;
