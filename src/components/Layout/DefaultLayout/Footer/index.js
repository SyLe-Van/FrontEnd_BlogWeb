import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>FOOTER</h1>
            </div>
        </div>
        </footer>
    );
}

export default Footer;