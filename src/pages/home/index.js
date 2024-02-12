import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import Swiper from '~/components/Layout/Slideshow/Slider';
import Post from '~/pages/post';
import { Link } from 'react-router-dom';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/post/getPost`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
    return (
        <div className="wrapper">
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('contain-left')}>
                        <div className={cx('left-content')}>
                            <div className={cx('top-post')}>
                                <Link to={'http://localhost:3001/post/656e1871cdc7b9af90853d59'}>
                                    <a>
                                        <img src="https://mannup.vn/wp-content/uploads/2015/12/image4.jpeg"></img>
                                    </a>
                                </Link>
                                <article className={cx('left-text')}>
                                    <h1>Vì sao đàn ông Pháp chẳng cần cố gắng mà vẫn đẹp</h1>
                                </article>
                            </div>

                            <div className={cx('bottom-post')}>
                                <Link to={'http://localhost:3001/post/656e15842611b6894050901c'}>
                                    <a>
                                        <img src="https://mannup.vn/wp-content/uploads/2019/08/d4ed63847ca576487a80d35d467405f7.jpg"></img>
                                    </a>
                                </Link>
                                <article className={cx('left-text')}>
                                    <h1>Đồng hồ Thuỵ Sĩ – Vì sao từ lâu vẫn mãi là đỉnh cao</h1>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className={cx('contain-middle')}>
                        <div className={cx('top-post')}>
                            <Link to={'http://localhost:3001/post/656f7257361662459ebc779c'}>
                                <a>
                                    <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg"></img>
                                </a>
                            </Link>
                            <article className={cx('left-text')}>
                                <h1>Giải mã điều tạo nên một vẻ đẹp nam tính</h1>
                            </article>
                        </div>
                    </div>
                    <div className={cx('contain-right')}>
                        <div className={cx('right-content')}>
                            <div className={cx('t-post')}>
                                <Link to={'http://localhost:3001/post/656f733b361662459ebc77ba'}>
                                    <a>
                                        <img src="https://mannup.vn/wp-content/uploads/2016/02/image-1.jpeg"></img>
                                    </a>
                                </Link>
                                <article className={cx('right-text')}>
                                    <h1>Nụ cười và cuộc đời</h1>
                                </article>
                            </div>

                            <div className={cx('b-post')}>
                                <Link>
                                    <img src="https://mannup.vn/wp-content/uploads/2017/12/10.jpg"></img>
                                </Link>
                                <a className={cx('right-text')}>
                                    <h1>Yohji Yamamoto – Samurai không thoát khỏi cây kiếm của mình</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row1')}>
                    <h2>Thanks for visiting us!</h2>
                </div>
            </div>
        </div>
    );
}
