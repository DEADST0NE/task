import React, { FC } from 'react';
import { Button } from 'antd'; 

import logo from '../../../images/logo.svg';
import FormPasswordRecovery from '../../forms/PasswordRecovery'
import './PasswordRecovery.scss';

const PasswordRecovery: FC = () => {
  return ( 
    <div className="password-recovery">  
      <div className="password-recovery-conteiner">
        <div className="password-recovery-content-header">
          <img className="logo" src={logo} height="35" alt="Логотип" /> 
          <span className="logo-title">Task</span>
        </div> 
        <div className="password-recovery-content-body"> 
          <FormPasswordRecovery />
        </div>
        <div className="password-recovery-content-footer"> 
          <Button type="text" href="/signUp">Sign Up</Button>
        </div> 
      </div> 
    </div> 
  )
}

export default PasswordRecovery;