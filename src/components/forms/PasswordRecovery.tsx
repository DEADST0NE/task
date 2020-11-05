import React from 'react' 
import { Form, Input, Button } from 'antd'; 

type value = { 
  email: string;
  password: string;
}; 

const FormPasswordRecovery: React.FC = () => { 
  const onFinish = (values: value) => {
    console.log('Success:', values);
  };  
  return (
    <Form
      name="passwordRecovery"
      className="password-recovery-form"
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

      <Form.Item className="submit-content">
        <Button type="ghost" htmlType="submit">
          Password recovery
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormPasswordRecovery;