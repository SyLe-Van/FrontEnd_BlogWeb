import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import Swiper from '~/components/Layout/Slideshow/Slider'
import { useEffect } from 'react';
import Post from '~/pages/post';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import LifeStyle from '~/pages/lifestyle';
const cx = classNames.bind(styles);


export default function Home() {
    const [lfposts,setLFPosts] = useState([]);
    const [fposts,setFPosts] = useState([]);
    const [cposts,setCPosts] = useState([]);
    const [gposts,setGPosts] = useState([]);
    const lifestyle = 'lifestyle';
    const fashion = 'fashion';
    const cinema = 'cinema';
    const grooming = 'grooming';
    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${lifestyle}`).then(response => {
            response.json().then(lfposts => {
                setLFPosts(lfposts);});
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${fashion}`).then(response => {
            response.json().then(fposts => {
                setFPosts(fposts);});
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${cinema}`).then(response => {
            response.json().then(cposts => {
                setCPosts(cposts);});
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${grooming}`).then(response => {
            response.json().then(gposts => {
                setGPosts(gposts);});
            });
    }, []);
    return (
        <div className='wrapper'>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('contain-left')}>
                        <div className={cx('left-content')}>  
                            <div className={cx('top-post')}>
                                <a>
                                    <img src='https://mannup.vn/wp-content/uploads/2015/12/image4.jpeg'></img>
                                </a>
                                <article className={cx('left-text')}>
                                    <h1>Vì sao đàn ông Pháp chẳng cần cố gắng mà vẫn đẹp</h1>
                                </article>
                            </div>
                            <div className={cx('bottom-post')}>
                                <a>
                                    <img src='https://mannup.vn/wp-content/uploads/2019/08/d4ed63847ca576487a80d35d467405f7.jpg'></img>
                                </a>
                                <article className={cx('left-text')}>
                                    <h1>Đồng hồ Thuỵ Sĩ – Vì sao từ lâu vẫn mãi là đỉnh cao</h1>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className={cx('contain-middle')}>
                        <div className={cx('top-post')}>
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg'></img>
                            </a>
                            <article className={cx('left-text')}>
                                <h1>Giải mã điều tạo nên một vẻ đẹp nam tính</h1>
                            </article>
                            </div>
                    </div>
                    <div className={cx('contain-right')}>
                        <div className={cx('right-content')}>  
                            <div className={cx('t-post')}>
                                <a>
                                    <img src='https://mannup.vn/wp-content/uploads/2016/02/image-1.jpeg'></img>
                                </a>
                                <article className={cx('right-text')}>
                                    <h1>Nụ cười và cuộc đời</h1>
                                </article>
                            </div>
                            <div className={cx('b-post')}>
                                <a>
                                    <img src='https://mannup.vn/wp-content/uploads/2017/12/10.jpg'></img>
                                </a>
                                <article className={cx('right-text')}>
                                    <h1>Yohji Yamamoto – Samurai không thoát khỏi cây kiếm của mình</h1>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row1')}></div>

                {/* lifestyle post */}
                <div className={cx('lifestyle-block')}>
                    <div className={cx('lifestyle-title')}>                 
                        <p>Lifestyle</p>
                    </div>
                    <div className={cx('lifestyle-contain')}>
                        {lfposts.length > 0 && lfposts.map(lfposts => (
                            <Post {...lfposts} classname={cx('post')}/>
                        ))}
                    </div>
                </div>

                {/* fashion post */}

                <div className={cx('fashion-block')}>
                    <div className={cx('fashion-title')}>
                            <p>Fashion</p>
                    </div>
                    <div className={cx('fashion-contain')}>
                        {fposts.length > 0 && fposts.map(fpost => (
                            <Post {...fpost} classname={cx('post')}/>
                        ))}
                    </div>
                </div>

                {/* cinema post */}

                <div className={cx('cinema-block')}>
                    <div className={cx('cinema-title')}>  
                        <p>Cinema</p>
                    </div>
                    <div className={cx('cinema-contain')}>
                        {cposts.length > 0 && cposts.map(cpost => (
                            <Post {...cpost} classname={cx('post')}/>
                        ))}
                    </div>
                </div>

                {/* grooming post */}

                <div className={cx('grooming-block')}>
                    <div className={cx('grooming-title')}>
                        <p>Grooming</p>
                    </div>
                    <div className={cx('grooming-contain')}>
                        {gposts.length > 0 && gposts.slice(0, 2).map(gpost => (
                            <Post {...gpost} classname={cx('post')}/>
                        ))}
                    </div>
                </div>

                <div className={cx('row2')}></div>
            </div>
            <div className={cx('footer')}>
                    <Footer />
            </div>
        </div>
    )
}

