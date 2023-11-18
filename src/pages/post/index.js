import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Post({title, cover, content, categories}) {
    
    return (
        <div className={cx('main-content')}>
            <a className={cx('cover')}>
                <img src={'http://localhost:3000/post/' + cover}></img>
            </a>
            <div className={cx('title')}>
                <h3>{categories}</h3>
                <h2>{title}</h2>
            </div>
        </div> 
    )
}


    