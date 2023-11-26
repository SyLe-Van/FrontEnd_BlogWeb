import {Link, useParams, Navigate} from "react-router-dom";
import styles from './editPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from "react";
import { FundTwoTone } from "@ant-design/icons";
import Editor from "~/Editor";


const cx = classNames.bind(styles);

export default function EditPost() {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [categories,setCategories] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/post/' + id)
            .then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setCategories(postInfo.categories);
                setContent(postInfo.content);
                setCover(postInfo.cover);
                })
            } 
            )
    }, [])

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('categories', categories);
        data.append('content', content);
        data.append('id', id)
        if(files?.[0]){
            data.append('file', files?.[0]);
            
        }
        const response = await fetch('http://localhost:3000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        })
        if (response.ok) {
            setRedirect(true);
        }

    }
    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <form onSubmit={updatePost}>
          <input type="title"
                 placeholder={'Title'}
                 value={title}
                 onChange={ev => setTitle(ev.target.value)} />
          <input type="category"
                 placeholder={'Categories'}
                 value={categories}
                 onChange={ev => setCategories(ev.target.value)} />
          <input type="file"
                 onChange={ev => setFiles(ev.target.files)} />
          <Editor onChange={setContent} value={content}/>
          <button style={{marginTop:'5px'}}>Update Post</button>
        </form>
      );
}

 