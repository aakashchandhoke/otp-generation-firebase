import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import {
    withRouter
  } from "react-router-dom";
import { Form, Input, InputNumber, Button, Card, Row, Col} from 'antd';

import {
    PhoneOutlined,
    DatabaseOutlined
} from '@ant-design/icons';

class Main extends React.Component {	  
	
	submitPhoneNumberAuth = () =>{
        this.props.history.replace('/otp-auth');
	}

	submitPhoneNumberAuthDB = () =>{
        //TO be implemented
        //this.props.history.replace('/success-otp');
	}

	render(){
		const onFinish = values => {
			console.log('Success:', values);
		  };
		
		  const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		  };
		
		  const layout = {
			labelCol: {
			  span: 8,
			},
			wrapperCol: {
			  span: 12,
			},
		  };
		  const tailLayout = {
			wrapperCol: {
			  offset: 6,
			  span: 12,
			},
		  };
		return (
    <div>
		<Card title="Firebase Otp Authentication" >
			
			<Form
			{...layout}
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			>
				<Form.Item
				label="Number"
				name="number"
				rules={[{ required: true, message: 'Please input your number!' }]}
				>
					<InputNumber style={{width:"100%"}} />
				</Form.Item>
		
				<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>
		
				<Form.Item {...tailLayout}>
					<Button style={{width:"100%"}} type="primary" htmlType="submit" onClick={this.submitPhoneNumberAuthDB}>
                    <DatabaseOutlined /> SIGN IN WITH DB
					</Button>
				</Form.Item>
			</Form>
            <Row >
                <Col  span={12} offset={6}>
                <Button danger style={{width:"100%"}} type="primary" htmlType="submit" onClick={this.submitPhoneNumberAuth}>
                <PhoneOutlined /> SIGN IN USING YOUR PHONE NUMBER
			    </Button>
                </Col>
            </Row>
            
		</Card>
    </div>
		);
	}
}
export default withRouter(Main);


