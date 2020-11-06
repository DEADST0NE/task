import React from 'react' 
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

type value = { 
  email: string;
  password: string;
  repeatPassword: string;
  fio: string;
  alias: string;
  avatar: File; 
}; 

const FormSignUp: React.FC = () => { 
  const onFinish = (values: value) => {
    console.log('Success:', values);
  };  
  return (
    <Form
      name="signUp"
      className="signUp-form"
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
        label="ФИО"
        name="fio" 
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свое ФИО',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Псевдоним"
        name="alias" 
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой псевдоним',
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
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormSignUp;