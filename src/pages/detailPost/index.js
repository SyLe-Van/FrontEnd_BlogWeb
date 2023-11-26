import {Link, useParams} from "react-router-dom";
import styles from './detailPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from "react";
import { Button, Modal } from 'antd';
const cx = classNames.bind(styles);

export default function DetailPost() {
    
    const [postInfo, setPostInfo] = useState(null);
    const [userInfo, setUserInfo] = useState();
    const {id} = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const cx = classNames.bind(styles);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        fetch(`http://localhost:3000/deletePost/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/';
            } else {
                console.error('Failed to delete post');
            }
        })
        .catch(error => {
            console.error('Failed to delete post', error);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        fetch(`http://localhost:3000/getPost/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, []);

    if (!postInfo) return '';

        return (
            <div className={cx('wrapper')}>
                <div className={cx('image')}>
                    <img src={`http://localhost:3000/${postInfo.cover}`} alt="Post Cover" />
                </div>
                <div className={cx('author')}>by {postInfo.author.username} </div>
                <h2>{postInfo.title}</h2>
                <div className={cx('editpost')}>
                    <Link to={`/edit/${postInfo._id}`}>Edit</Link>
                </div>
                {/* {userInfo.id === postInfo.author._id && (
                    <div>
                        <Link to={`/edit/${postInfo._id}`}>Edit</Link>
                    </div>
                )} */}
                <div className={cx('deletepost')}>
                    <>
                        <Button type="primary" onClick={showModal}>
                            Delete
                        </Button>
                        <Modal title="Delete Post" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Are you sure you want to delete this post?</p>
                        </Modal>
                    </>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }}>
                </div>
            </div>
        )
 }

 