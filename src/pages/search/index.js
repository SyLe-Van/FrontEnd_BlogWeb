import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Search({ onSearchClick }) {
    async function search(event) {
        // const ev = event;
        // ev.preventDefault();
        // try {
        //     const response = await axios.post(
        //         'http://localhost:3000/login',
        //         { username, password },
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true,
        //         },
        //     );
        //     if (response.status === 200) {
        //         setUserInfo(response.data);
        //         setRedirect(true);
        //         alert('Login successful');
        //     } else {
        //         alert('Login failed');
        //     }
        // } catch (error) {
        //     console.error('Error during login:', error);
        //     alert('Login failed');
        // }
    }
    // if (redirect) {
    //     return <Navigate to={'/'} />;
    // }
    return (
        <form className={cx('search')} onSubmit={search}>
            <h1>Search Blogs</h1>
            <input
                className={cx('search-input')}
                type="text"
                placeholder="Enter title of blog"
                // value={username}
                // onChange={(ev) => setUsername(ev.target.value)}
            />
            <button>search</button>
        </form>
    );
}
