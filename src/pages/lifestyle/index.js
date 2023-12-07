import styles from './LifeStyle.module.scss';
import classNames from 'classnames/bind';
import Post from '~/pages/post';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);


export default function LifeStyle() {
    const [posts,setPosts] = useState([]);
    const lifestyle = 'lifestyle';
    useEffect(() => {
        fetch(`https://backend-blogweb.onrender.com/post/getPostByCategories/${lifestyle}`).then(response => {
            response.json().then(posts => {
                setPosts(posts);});
            });
             
    }, []);
    
    return(
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('lifestyle-block')}>
                    <p className={cx('lifestyle-title')}>Lifestyle</p>
                </div>
                <div className={cx('lifestyle-contain')}>
                    {posts.length > 0 && posts.map(post => (
                        <Post {...post} classname={cx('post')}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

