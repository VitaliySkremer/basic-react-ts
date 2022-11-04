import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import React, {useState} from "react";
import { IPost } from "../Model/ModelPost";


interface IPostFormProps {
  create: (newPost: IPost)=>void;
}

export const PostForm = ({create}: IPostFormProps) => {

  const [post, setPost] = useState({title:'', body: ''});

  const addNewPost = (event: React.SyntheticEvent) =>{
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton type="submit" onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}