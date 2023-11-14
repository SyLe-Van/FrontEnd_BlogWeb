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
import Login from '../../Register';

const cx = classNames.bind(styles);

function Sidebar() {
        const [open, setOpen] = useState(false);
        const [size, setSize] = useState();
        const [showDropdown, setShowDropdown] = useState(false);
        const showDrawer = () => {
          setOpen(true);
        };
        // const showLargeDrawer = () => {
        //     setSize('large');
        //     setOpen(true);
        // };
        const onClose = () => {
          setOpen(false);
        };
        // const handleButtonHover = () => {
        //     setShowDropdown(true);
        //   };
        
        //   const handleButtonLeave = () => {
        //     setShowDropdown(false);
        //   };
        // const items = [
        //     {
        //       key: '1',
        //       label: (
        //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        //           1st menu item
        //         </a>
        //       ),
        //     },
        //     {
        //       key: '2',
        //       label: (
        //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        //           2nd menu item (disabled)
        //         </a>
        //       ),
        //       icon: <SmileOutlined />,
        //       disabled: true,
        //     },
        //     {
        //       key: '3',
        //       label: (
        //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        //           3rd menu item (disabled)
        //         </a>
        //       ),
        //       disabled: true,
        //     },
        //     {
        //       key: '4',
        //       danger: true,
        //       label: 'a danger item',
        //     },
        //   ];


        
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('fragment')}></div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/lifestyle">LIFESTYLE</Link>
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
                            
                                <Button className={cx('login')}
                                    onClick={showDrawer}
                                >
                                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                                </Button>
                                {/* {showDropdown && (
                                    <Dropdown
                                    overlay={{
                                        items,
                                    }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}></a>
                                    </Dropdown>
                                )} */}
                                <Drawer
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
                                    <Login/>
                                </Drawer>
                            
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
