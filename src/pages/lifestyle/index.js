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
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    )
}

