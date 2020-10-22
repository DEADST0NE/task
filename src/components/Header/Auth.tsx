import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';


const AvatarDropdown = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>
      Личный кабинет
    </Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>
      Настройки
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<LogoutOutlined />}>
      Выйти
    </Menu.Item>
  </Menu>
);

const Auth: React.FC = () => {
  return (
    <Dropdown overlay={AvatarDropdown} placement='bottomCenter' trigger={['click']}>
      <Avatar alt='user' icon={<UserOutlined />} />
    </Dropdown>
  )
}

export default Auth;