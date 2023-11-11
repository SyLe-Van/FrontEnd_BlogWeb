import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);


function Home() {
    return (
        <div className='wrapper'>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('contain-left')}>
                        <div className={cx('left-content')}>  
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2015/12/image4.jpeg'></img>
                            </a>
                            <article className={cx('left-text')}>
                                <h1>Vì sao đàn ông Pháp chẳng cần cố gắng mà vẫn đẹp</h1>
                            </article>
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2019/08/d4ed63847ca576487a80d35d467405f7.jpg'></img>
                            </a>
                            <article className={cx('left-text')}>
                                <h1>Đồng hồ Thuỵ Sĩ – Vì sao từ lâu vẫn mãi là đỉnh cao</h1>
                            </article>
                        </div>
                    </div>
                    <div className={cx('contain-middle')}>
                        <div className={cx('main-content')}>
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg'></img>
                            </a>
                            <article className={cx('main-text')}>
                                <h1>Điều tạo nên một vẽ đẹp nam tính</h1>
                            </article>
                        </div>
                    </div>
                    <div className={cx('contain-right')}>
                        <div className={cx('right-content')}>  
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2016/02/image-1.jpeg'></img>
                            </a>
                            <article className={cx('right-text')}>
                                <h1>Nụ cười và cuộc đời</h1>
                            </article>
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2017/12/10.jpg'></img>
                            </a>
                            <article className={cx('right-text')}>
                                <h1>Yohji Yamamoto – Samurai không thoát khỏi cây kiếm của mình</h1>
                            </article>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    
                </div>
                <div className={cx('photography')}>
                    <div className={cx('title')}></div>
                    <div className={cx('slideshow')}></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
