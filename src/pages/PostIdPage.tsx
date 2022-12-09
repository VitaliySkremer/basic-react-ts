import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetch} from "../Hooks/useFetch";
import PostService from "../API/PostService";
import {Comment, IPost} from "../Model/ModelPost";
import { Loader } from "../Components/UI/Loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost>({
    id: 0,
    title:'',
    body:''
  });
  const [comments, setComments] = useState<Comment[]>([])

  const [fetchPostById, isLoading, error] = useFetch(async ()=>{
    const response:any = await PostService.getById(params.id!)
    setPost(response.data);
  })

  const [fetchComments, isLoadingComments, errorComments] = useFetch(async ()=>{
    const response:any = await PostService.getComments(params.id!)
    setComments(response.data);
  })

  useEffect(()=>{
    fetchPostById();
    fetchComments();
  }, [])
  return (
    <div>
      <h1>Вы попали на пост {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
      }
      {isLoadingComments
        ?<Loader/>
        :<div>
          {comments.map(com=>
            <div style={{marginTop: '10px'}} key={com.body}>
              <h5>{com.email}</h5>
              <p>{com.body}</p>
            </div>
          )}
        </div>
      }
    </div>
  )
}