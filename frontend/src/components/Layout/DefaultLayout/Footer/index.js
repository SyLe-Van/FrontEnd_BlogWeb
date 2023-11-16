import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <p>Final Project of <span><b>Web Application Development</b></span></p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;