import {Link} from "react-router-dom";
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { AimOutlined } from "@ant-design/icons";


const cx = classNames.bind(styles);

export default function Post({_id,title, categories, cover, content, author}) {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('post')}>
                <Link to={`/post/${_id}`}>
                    <a className={cx('image')}>
                        <img src={'http://localhost:3000/' + cover}></img>
                    </a>
                </Link>
                <article className={cx('main-text')}>
                    {/* <a className={cx('author')}>{author.username}</a> */}
                    <p className={cx('category')}>{categories}</p>
                    <Link to={`/post/${_id}`}>
                        <h2 className={cx('title')}>{title}</h2>
                    </Link>
                </article>
            </div>
        </div>
    )
}

