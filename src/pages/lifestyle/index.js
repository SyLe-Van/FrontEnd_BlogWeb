import styles from './LifeStyle.module.scss';
import classNames from 'classnames/bind';
import Post from '~/pages/post';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);


export default function LifeStyle() {
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/getPost').then(response => {
            response.json().then(posts => {
                setPosts(posts);});
            });
             
    }, []);
    
    return(
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('lifestyle-block')}>
                    <p>Lifestyle</p>
                </div>
                <div className={cx('container')}>
                    <div className={cx('container-left')}>
                        <div className={cx('content-left')}> 
                            {/* {posts.length > 0 && posts.map(post => (
                                <Post {...post} classname={cx('post')}/>
                            ))}
                             */}
                        </div>
                    </div>
                    <div className={cx('container-right')}>
                        <div className={cx('content-right')}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

