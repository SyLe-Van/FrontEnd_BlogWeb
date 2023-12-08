import { useParams, Navigate } from 'react-router-dom';
import styles from './editPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Editor from '~/Editor';
import axios from 'axios';

const cx = classNames.bind(styles);

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:3000/post/' + id)
    //         .then(response => {
    //         response.json().then(postInfo => {
    //             setTitle(postInfo.title);
    //             setCategories(postInfo.categories);
    //             setContent(postInfo.content);
    //             setCover(postInfo.cover);
    //             })
    //         }
    //         )
    // }, [])
    useEffect(() => {
        axios
            .get(`http://localhost:3000/post/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setCategories(response.data.categories);
                setContent(response.data.content);
                setCover(response.data.cover);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('categories', categories);
        data.append('content', content);
        data.append('id', id);
        if (files?.[0]) {
            data.append('file', files?.[0]);
        }
        try {
            const response = await axios.put(`http://localhost:3000/post`, data, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setRedirect(true);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <form onSubmit={updatePost}>
                    <input
                        type="title"
                        placeholder={'Title'}
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <input
                        type="category"
                        placeholder={'Categories'}
                        value={categories}
                        onChange={(ev) => setCategories(ev.target.value)}
                    />
                    <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
                    <Editor className={cx('edit')} onChange={setContent} value={content} />
                    <button style={{ marginTop: '5px' }}>Update Post</button>
                </form>
            </div>
        </div>
    );
}
