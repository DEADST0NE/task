import React from 'react';
import { Button } from 'antd'; 

import logo from '../../../images/logo.svg';
import SignUpForm from '../../forms/SignUp'
import './SignUp.scss';

const SignUp: React.FC = () => {
  return (
    <div className="signUp">   
      <div className="signUp-conteiner">
        <div className="signUp-left-conteiner">
          <div>
            <img className="logo" src={logo} height="35" alt="Логотип" /> 
            <span className="logo-title">Task</span>
          </div>
        </div>
        <div className="signUp-right-conteiner">
          <div className="signUp-content-body">
            <SignUpForm />
          </div>
          <div className="signUp-content-footer"> 
            <Button type="text" href="/signIn">Sign In</Button>
          </div> 
        </div> 
      </div> 
    </div> 
  )
}

export default SignUp