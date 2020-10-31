import React from 'react' 
import { Form, Input, Button } from 'antd';

type value = { 
  email: string;
  password: string;
}; 

const FormSignIn: React.FC = () => { 
  const onFinish = (values: value) => {
    console.log('Success:', values);
  };  
  return (
    <Form
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email" 
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item> 

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormSignIn;