import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
const cx = classNames.bind(styles);

export default function RegisterPage({ onLoginClick }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);


    async function register(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type':'application/json'},
      });
      if (response.status === 200) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    }
    return (
      <form className={cx('register')} onSubmit={register}>
        <h1>Register</h1>
        <input type="text"
               placeholder="username"
               value={username}
               onChange={ev => setUsername(ev.target.value)}/>
        <input type="password"
               placeholder="password"
               value={password}
               onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
      </form>
    );
  }
