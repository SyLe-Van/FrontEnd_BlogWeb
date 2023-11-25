import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import Register from '../register';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(event) {
      const ev = event;
      ev.preventDefault();
      await fetch('http://localhost:3001/login', {
          method: 'POST',
          body: JSON.stringify({username,password}),
          headers: {'Content-Type':'application/json'},
      });
  }

  return (
    <form 
      className={cx('login')} 
      onSubmit={login}
    >
      <h1
        className={cx('login-title')}
      >
        Login
      </h1>
      <input 
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input 
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>
        Login
      </button>
      <p>
        No account?
      <span>
        <Link 
          className={cx('register')}
          to="/register" 
        >
        <a>
          Sign up
        </a>
        </Link>
      </span>
      </p>
    </form>
  );
}
