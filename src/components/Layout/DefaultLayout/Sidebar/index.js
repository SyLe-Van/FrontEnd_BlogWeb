import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faPlus, faShapes, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper, UserContext } from '~/components/Popper';
import Contact from '~/components/Contact';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext, triggerEffect } from 'react';
import { Button, Drawer, Space, Dropdown } from 'antd';
import { LockOutlined, UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import Login from '~/pages/login';

const cx = classNames.bind(styles);

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState('');
    const showDrawer = () => {
        setOpen(true);
    };
    const showLargeDrawer = () => {
        setSize('large');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetch('http://localhost:3000/profile', {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            setUsername(userInfo.username);
          });
        });
    });
    
    function logout(){
        fetch('http://localhost:3000/logout',{
            credentials: 'include',
            method: 'POST',
        });
        setUsername(null)
    }
    // const username = userInfo?.username;

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('fragment')}></div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/lifestyle">LIFESTYLE!</Link>
                        </li>
                        <li>
                            <Link to="/fashion">FASHION</Link>
                        </li>
                        <li>
                            <Link to="/cinema">CINEMA</Link>
                        </li>
                        <li>
                            <Link to="/grooming">GROOMING</Link>
                        </li>
                    </ul>
                </div>

                <nav >
                    {username && (
                        <>
                            <li className={cx('menu-mode')}>
                                <button className={cx('moon')}>
                                     <FontAwesomeIcon icon={faMoon} style={{color: "#000000",}} />
                                </button>
                            </li>
                            <li className={cx('menu-login')}>
                                <Link to="/create">
                                    <FontAwesomeIcon icon={faPlus} beatFade style={{color: "#000000",}} />
                                </Link>
                            </li>
                            <li className={cx('menu-logout')}>
                                <Button onClick={logout}>
                                    <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#000000",}} />
                                </Button>
                            </li>
                        </>
                    )}
                
                    {!username && (
                        <>
                            <div className={cx('menu-contact')}>
                                <ul>
                                    <li className={cx('menu-mode')}>
                                        <button className={cx('moon')}>
                                            <FontAwesomeIcon icon={faMoon} style={{color: "#000000",}} />
                                        </button>
                                    </li>
                                    <li className={cx('menu-login')}>
                                        <Link to="/login">
                                            <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                                        </Link>
                                    </li>
                                    <li className={cx('menu-bars')}>
                                        <Space>
                                            <Button className={cx('bars')}>
                                                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                                            </Button>
                                        </Space>
                                        {/* <Drawer
                            
                                            placement="right"
                                            onClose={onClose} open={open}
                                            size={size}
                                            extra={
                                                <Space>
                                                    <Button onClick={onClose}>Cancel</Button>
                                                    <Button type="primary" onClick={onClose}>
                                                        Ok
                                                    </Button>
                                                </Space>
                                            }
                                        >
                                        <p>Nothing!</p>
                                        </Drawer> */}
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    
                </nav>
            </div>
        </aside>
    );
}

