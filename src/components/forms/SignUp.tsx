import React, { ComponentClass } from 'react' 
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppStateType } from '../../store/reducers';
import signUpRequest from '../../store/auth/signUp/actions';

type type = { 
  email: string;
  password: string;
  fio: string;
  alias: string;
}; 

const FormSignUp: ComponentClass = withRouter(({history}) => { 
  const dispatch = useDispatch();
  const { loading, error }: {loading: boolean, error: type} = useSelector( (state: AppStateType) => state.signUp ); 
  const onFinish = (values: type) => dispatch(signUpRequest(values, history.push));
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
        label="ФИО"
        name="fio" 
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свое ФИО',
          },
          {
            pattern: /^[А-ЯA-Z][а-яa-zА-ЯA-Z-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z-]{1,})?$/g,
            message: 'ФИО введены некорректно',
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
        validateStatus={error?.alias ? 'error': undefined} 
        help={error?.alias}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email" 
        name="email" 
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой Email',
          },
          {
            type: 'email',
            message: 'Email не соответствует формату',
          },
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
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="submit-content">
        <Button type="ghost" htmlType="submit" icon={<LoginOutlined />} loading={loading}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
})

export default FormSignUp;