import styles from './Create.module.scss';
import classNames from 'classnames/bind';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from '~/Editor';
const cx = classNames.bind(styles);

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [categories,setCategories] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();

    data.append('title', title);
    data.append('categories', categories);
    data.append('content', content);
    data.append('file', files[0]);
   
    ev.preventDefault();
    const response = await fetch('https://backend-blogwebsite.onrender.com/post/createPost', {
      method: 'POST',
      body: data,
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    console.log(await response.json())
    if (response.ok) {
      setRedirect(true);
    }
  }
  
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <form onSubmit={createNewPost} className={cx('create')}>
          <input className={cx('input-create')}
                type="title"
                 placeholder={'Title'}
                 value={title}
                 onChange={ev => setTitle(ev.target.value)} />
          <input 
                className={cx('input-create')}
                type="category"
                 placeholder={'Categories'}
                 value={categories}
                 onChange={ev => setCategories(ev.target.value)}/>
          <input className={cx('input-file')}
                  type="file"
                 onChange={ev => setFiles(ev.target.files)} />
          <ReactQuill className={cx('content')} onChange={setContent} value={content}/>
          <button style={{marginTop:'50px'}} className={cx('button')}>Create post</button>
        </form>
      </div>
    </div>
  );
}

