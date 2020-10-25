import React from 'react';
import { Layout } from 'antd'; 

import Auth from './Auth';
import logo from '../../images/logo.png';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <Layout>
      <Layout.Header className="header castom-header">
        <img className="logo" src={logo} height="35" alt="Логотип" />
        <div style={{flex: '1 1 0%'}}></div>
        <Auth />
      </Layout.Header>
    </Layout>
  )
}

export default Header