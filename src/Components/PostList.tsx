import {PostItem} from "./PostItem";
import {IPost} from "../Model/ModelPost";
import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";


interface IPostListProps {
  posts: IPost[];
  title: string;
  remove: (post: IPost)=> void
}


export const PostList = ({posts, title , remove}: IPostListProps) => {

  if(!posts.length){
    return <h1 style={{textAlign: "center"}}>Список постов пуст</h1>
  }
  return (
    <div>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}