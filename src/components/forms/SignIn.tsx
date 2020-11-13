import React, { ComponentClass } from 'react' 
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppStateType } from '../../store/reducers';
import signInRequest from '../../store/auth/signIn/actions';

type type = { 
  email: string;
  password: string;
}; 

const FormSignIn: ComponentClass = withRouter(({history}) => {
  const dispatch = useDispatch();
  const { loading, error }: {loading: boolean, error: type} = useSelector( (state: AppStateType) => state.signIn ); 
  const onFinish = (values: type) => dispatch(signInRequest(values, history.push));  
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
          {
            type: "email",
            message: 'Email не соответствует формату',
          }
        ]}
        validateStatus={error?.email ? 'error': undefined} 
        help={error?.email}
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
        validateStatus={error?.password ? 'error': undefined} 
        help={error?.password}
      >
        <Input.Password />
      </Form.Item> 

      <Form.Item className="submit-content">
        <Button type="ghost" htmlType="submit" loading={loading} icon={<LoginOutlined />}>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
})

export default FormSignIn;