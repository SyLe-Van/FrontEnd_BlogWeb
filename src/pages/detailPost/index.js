import {Link, Navigate, useParams} from "react-router-dom";
import styles from './detailPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Modal } from 'antd';
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);

export default function DetailPost({categories, title}) {
    
    const [postInfo, setPostInfo] = useState(null);
    // const [categories,setCategories] = useState('');
    const [userInfo, setUserInfo] = useState();
    const {id} = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const cx = classNames.bind(styles);

    const showModal = () => {

        setIsModalOpen(true);
    };

    const handleOk = () => {
        // fetch(`http://localhost:3000/deletePost/${id}`, {
        //     method: 'DELETE',
        //     credentials: 'include',
        // })
        // .then(response => {
        //     if (response.ok) {
        //         window.location.href = '/';
        //     } else {
        //         console.error('Failed to delete post');
        //     }
        // })
        // .catch(error => {
        //     console.error('Failed to delete post', error);
        //     });
        // setIsModalOpen(false);
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
                <div className={cx('inner')}>
                    <div className={cx('image')}>
                        <img src={`http://localhost:3000/static/${postInfo.cover}`} alt="Post Cover" />
                        {/* <p className={cx('categories')}>{categories}</p>
                        <h2 className={cx('title')}>{title}</h2> */}
                    </div>
                    <div className={cx('contain')}>
                        <div className={cx('author')}>
                            <img src='https://secure.gravatar.com/avatar/634c7a08ee41b1a61c797010f90c60a3?s=70&d=mm&r=g'/>
                            <div className={cx('name-author')}>{postInfo.author.username} </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('title')}>
                                <h2>{postInfo.title}</h2> 
                            </div>
                            <div className={cx('text')} dangerouslySetInnerHTML={{ __html: postInfo.content }}></div> 
                            <div className={cx('edit-update')}>
                                <div className={cx('editpost')}>
                                    <Link to={`/edit/${postInfo._id}`}>Edit</Link>
                                </div>
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
                            </div>
                        </div>
                        <div className={cx('sidebar')}>
                            <div classname={cx('top')}>
                               <ul className={cx('bar')}>
                                    <li>
                                        <FontAwesomeIcon icon={faFacebookF} style={{color: "#000000",}}/>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTwitter} style={{color: "#000000",}} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} />
                                    </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

 