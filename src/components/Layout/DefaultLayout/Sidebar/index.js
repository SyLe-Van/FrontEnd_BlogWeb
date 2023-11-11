import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faShapes, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Contact from '~/components/Contact';
import { Link } from 'react-router-dom';
import {
    BarsOutlined
  } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Sidebar() {
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
                                <FontAwesomeIcon icon={faMoon} style={{color: "#000000",}}   bounce/>
                            </button>
                        </li>
                        <li className={cx('menu-login')}>
                            <button className={cx('login')}>
                                <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                            </button>
                        </li>
                        <li className={cx('menu-bars')}>
                            <button className={cx('bars')}>
                                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                            </button>
                        </li>
                    </ul>
                    <BarsOutlined />
                    {/* <Tippy
                        render={(attrs) => (
                            <div className={cx('contact')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Contact />
                                </PopperWrapper>
                            </div>
                        )}
                        placement="left-end"
                        interactive="true"
                    >
                        <button className={cx('bars')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </Tippy> */}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
