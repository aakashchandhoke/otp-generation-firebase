import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import PhoneOTPAuth from './phone-otp-auth';
import Main from './Main'
import SuccessOTP from './success-otp';

class App extends React.Component {	  
	
	render(){
		return(
			<Router>
				<div>
				<Switch>
					<Route path="/otp-auth">
						<PhoneOTPAuth />
					</Route>
					<Route path="/success-otp">
						<SuccessOTP />
					</Route>
					<Route path="/">
						<Main />
					</Route>
					
				</Switch>
				</div>
			</Router>
		);
	}
}
export default App;


