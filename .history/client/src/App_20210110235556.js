import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Switch>
		</div>
	);
};

export default App;
