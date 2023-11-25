import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faShapes, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Contact from '~/components/Contact';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Drawer, Space, Dropdown } from 'antd';
import { LockOutlined, UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import Login from '~/pages/login';


const cx = classNames.bind(styles);

function Sidebar() {
        const [open, setOpen] = useState(false);
        const [size, setSize] = useState();
        const [showDropdown, setShowDropdown] = useState(false);
        const [showLogin, setShowLogin] = useState(false);

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

        const toggleLogin = () => {
            setShowLogin(!showLogin);
          };
        
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
                <div className={cx('menu-contact')}>
                    <ul>
                        <li className={cx('menu-mode')}>
                            <button className={cx('moon')}>
                                <FontAwesomeIcon icon={faMoon} style={{color: "#000000",}} />
                            </button>
                        </li>
                        <li className={cx('menu-login')}>
                            <button
                                className={cx('user-icon-button')} 
                                onClick={() => setShowLogin(!showLogin)}
                            >
                                <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />
                            </button>
                            {showLogin && (
                                <div className={cx('login-modal')}>
                                    <div className={cx('modal-content')}>
                                        <button 
                                            className={cx('login-modal-close-button')} 
                                            onClick={toggleLogin}
                                        >
                                            X
                                        </button>
                                        <Login />
                                    </div>
                                </div>
                            )}
                            {/* <Link to="/login">
                                <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                            </Link> */}
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
            </div>
        </aside>
    );
}

export default Sidebar;
