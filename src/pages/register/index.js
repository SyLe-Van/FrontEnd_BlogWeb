import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
const cx = classNames.bind(styles);

export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(event) {
        const ev = event;
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
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
