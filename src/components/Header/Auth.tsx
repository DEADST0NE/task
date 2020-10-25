import React from 'react';
import { Button } from 'antd';
// import { Avatar, Menu, Dropdown } from 'antd';
// import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';


// const AvatarDropdown = (
//   <Menu>
//     <Menu.Item icon={<UserOutlined />}>
//       Личный кабинет
//     </Menu.Item>
//     <Menu.Item icon={<SettingOutlined />}>
//       Настройки
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item icon={<LogoutOutlined />}>
//       Выйти
//     </Menu.Item>
//   </Menu>
// );

const ButtonGrup: React.FC = () => (
  <>
    <Button className="btn-sign-in" href="/signIn">Sign in</Button>
    <Button className="btn-sign-up" href="/signUp"> Sign up</Button>
  </>
)

const Auth: React.FC = () => {
  return (
    <>
      <ButtonGrup />
    </>
    // <Dropdown overlay={AvatarDropdown} placement='bottomCenter' trigger={['click']}>
    //   <Avatar alt='user' icon={<UserOutlined />} />
    // </Dropdown>
  )
}

export default Auth;