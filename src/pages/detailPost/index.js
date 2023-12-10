import { Link, Navigate, useParams } from 'react-router-dom';
import styles from './detailPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'antd';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function DetailPost({ categories, title }) {
    const [postInfo, setPostInfo] = useState(null);
    // const [categories,setCategories] = useState('');
    const [userInfo, setUserInfo] = useState();
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cx = classNames.bind(styles);

    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        axios
            .get(`https://backend-blogwebsite.onrender.com/post/getPost/${id}`)
            .then((response) => {
                setPostInfo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    const handleOk = () => {
        axios
            .delete(`https://backend-blogwebsite.onrender.com/post/deletePost/${id}`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    const encodedCategory = encodeURIComponent(postInfo.categories);
                    window.location.href = `/${encodedCategory}`;
                }
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        axios
            .get(`https://backend-blogwebsite.onrender.com/post/getPost/${id}`)
            .then((response) => {
                setPostInfo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [id]);
    if (!postInfo) return '';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('image')}>
                    <img src={`https://backend-blogwebsite.onrender.com/static/${postInfo.cover}`} alt="Post Cover" />
                </div>
                <div className={cx('contain')}>
                    <div className={cx('author')}>
                        <img src="https://secure.gravatar.com/avatar/634c7a08ee41b1a61c797010f90c60a3?s=70&d=mm&r=g" />
                        <div className={cx('name-author')}>{postInfo.author.username} </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <h2>{postInfo.title}</h2>
                        </div>
                        <div className={cx('text')} dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
                        <div className={cx('comment')}>
                            <input type="text" placeholder="Add a comment..." />
                            <div className={cx('comment-box')}>
                                <button>
                                    <Link to={`/edit/${postInfo._id}`}>Edit</Link>
                                </button>
                                <div>
                                    <>
                                        <Button type="primary" onClick={showModal}>
                                            Delete
                                        </Button>
                                        <Modal
                                            title="Delete Post"
                                            visible={isModalOpen}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                        >
                                            <p>Are you sure you want to delete this post?</p>
                                        </Modal>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar')}>
                        <div classname={cx('top')}>
                            <ul className={cx('bar')}>
                                <li>
                                    <FontAwesomeIcon icon={faFacebookF} style={{ color: '#000000' }} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: '#000000' }} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faYoutube} style={{ color: '#000000' }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
