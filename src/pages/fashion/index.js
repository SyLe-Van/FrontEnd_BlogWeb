import styles from './Fashion.module.scss';
import classNames from 'classnames/bind';
import Post from '~/pages/post';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);


export default function Fashion() {
    const fashion = 'fashion';
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${fashion}`).then(response => {
            response.json().then(posts => {
                setPosts(posts);});
            });
             
    }, []);
     
    return(
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('fashion-block')}>
                    <p className={cx('fashion-title')}>Fashion</p>
                </div>
                <div className={cx('fashion-contain')}>
                    {posts.length > 0 && posts.map(post => (
                        <Post {...post} classname={cx('post')}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

