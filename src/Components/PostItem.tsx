import {MyButton} from "./UI/button/MyButton";
import {IPost} from "../Model/ModelPost";


interface IPostItem {
  post: IPost
  remove:(post: IPost)=> void
}

export const PostItem = ({post, remove}: IPostItem) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}