import React, { FC } from 'react';  
import { Button } from 'antd';

import logo from '../../../images/logo.svg';
import SignInForm from '../../forms/SignIn'
import './SignIn.scss';

const SignIn: FC = () => {
  return ( 
    <div className="signIn">  
      <div className="signIn-conteiner">
        <div className="signIn-content-header">
          <img className="logo" src={logo} height="35" alt="Логотип" /> 
          <span className="logo-title">Task</span>
        </div> 
        <div className="signIn-content-body"> 
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