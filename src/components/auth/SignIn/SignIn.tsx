import React from 'react';  
import { Button } from 'antd';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';

import {githubClientId} from '../../../utils/constant';
import logo from '../../../images/logo.svg';
import SignInForm from '../../forms/SignIn'
import './SignIn.scss';

const SignIn: React.FC = () => {
  return ( 
    <div className="signIn">  
      <div className="signIn-conteiner">
        <div className="signIn-content-header">
          <img className="logo" src={logo} height="35" alt="Логотип" /> 
          <span className="logo-title">Task</span>
        </div> 
        <div className="signIn-content-body">
          <div className="signIn-other-services">
            <Button icon={<GoogleOutlined />} />
            <Button icon={<GithubOutlined />} href={`https://github.com/login/oauth/authorize?client_id=${githubClientId}`}/>
          </div> 
          <SignInForm />
        </div>
        <div className="signIn-content-footer">
          <Button type="text" href="/passwordRecovery">Забыли пароль ?</Button>
          <Button type="text" href="/signUp">Sign Up</Button>
        </div> 
      </div> 
    </div> 
  )
}

export default SignIn;