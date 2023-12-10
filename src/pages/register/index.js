import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function register(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post('https://backend-blogwebsite.onrender.com/register', {
                username,
                password,
            });
            if (response.status === 200) {
                setRedirect(true);
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration failed', error);
            alert('Registration failed');
        }
    }
    if (redirect) {
        return <Navigate to={''} />;
    }
    return (
        <form className={cx('register')} onSubmit={register}>
            <h1>Register</h1>
            <input
                className={cx('register-input')}
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                className={cx('register-input')}
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    );
}
