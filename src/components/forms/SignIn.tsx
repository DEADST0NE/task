import React from 'react' 
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

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
      name="signIn"
      className="signIn-form"
      layout="vertical"
      requiredMark={false}
      initialValues={{}}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email" 
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой Email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item> 

      <Form.Item className="submit-content">
        <Button type="ghost" htmlType="submit" icon={<LoginOutlined />}>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormSignIn;