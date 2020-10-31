import React from 'react';  

import FormSignIn from '../forms/FormSignIn'
import './SignIn.scss';

const SignIn: React.FC = () => {
  return ( 
    <div className="sigIn">  
        <div className="sigIn-conteiner">
          <span className="sigIn-conteiner-title">Sig in</span>
          <div className="sigIn-content">
            <FormSignIn />
          </div>
        </div> 
    </div> 
  )
}

export default SignIn;