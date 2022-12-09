import {MyButton} from "./UI/button/MyButton";
import {IPost} from "../Model/ModelPost";
import {useNavigate} from "react-router-dom";

interface IPostItem {
  post: IPost
  remove:(post: IPost)=> void
}

export const PostItem = ({post, remove}: IPostItem) => {
  const navigate = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=>navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}