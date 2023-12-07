import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useContext } from 'react';
import Register from '../register';
import { Link, Navigate } from 'react-router-dom';
import LifeStyle from '../lifestyle';
import { UserContext } from '~/UserContext';
const cx = classNames.bind(styles);

export default function Login({ onRegisterClick, showLogin }) {
  const [showRegister, setShowRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(event) {
    const ev = event;
    ev.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
        // window.location.href = '/'
      });
    } else {
        alert('Login failed'); 
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
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
      <input className={cx('login-input')}
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input className={cx('login-input')}
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
        <a 
          className={cx('register-redirect')} 
          onClick={onRegisterClick}
        >
          Register
        </a>
      </span>
      </p>
    </form>
  );
}