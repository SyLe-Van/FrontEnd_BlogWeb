import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { AimOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function Post({ _id, title, categories, cover, content, author }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('post')}>
                <Link to={`/post/${_id}`}>
                    <img src={'https://backend-2x7f.onrender.com/static/' + cover}></img>
                </Link>

                <Link to={`/post/${_id}`}>
                    <p className={cx('categories')}>{categories}</p>
                </Link>

                <Link to={`/post/${_id}`}>
                    <h2 className={cx('title')}>{title}</h2>
                </Link>
            </div>
        </div>
    );
}
