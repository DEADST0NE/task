import React from 'react';
import { Layout } from 'antd';
import Auth from './Auth';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <Layout>
      <Layout.Header className="header castom-header">
        <div className="logo" /> 
        <div style={{flex: '1 1 0%'}}></div>
        <Auth />
      </Layout.Header>
    </Layout>
  )
}

export default Header