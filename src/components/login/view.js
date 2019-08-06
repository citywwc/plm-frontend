import React, { useState } from 'react';
import {Form, Input, Button, Icon} from "antd";
import styles from './login.module.css';
const Login = ({login}) => {

  let userNameInput = null;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const emitEmptyUserName = () => {
    userNameInput.focus();
    setUserName('');
  };

  const gotoLogin = (e) => {
    e.preventDefault();
    login({userName, password});
  };

  const userNameSuffix = userName ? <Icon type="close-circle" onClick={emitEmptyUserName} /> : null;

  return(
    <div className={styles.content}>
      <Form onSubmit={gotoLogin} className={styles['login-form']}>
        <Form.Item>
          <Input
            placeholder="Username: admin or user"
            prefix={<Icon type="user"/>}
            suffix={userNameSuffix}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            ref={node => userNameInput = node}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder="Password: 123456"
            prefix={<Icon type="eye"/>}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>Login</Button>
        </Form.Item>
      </Form>
    </div>
)};

export default Login;
