import '../styles/App.css'
import React, { useEffect, useState} from "react";
import { IPost } from '../Model/ModelPost';
import { usePosts } from '../Hooks/usePosts';
import { useFetch } from '../Hooks/useFetch';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/page';
import { MyButton } from '../Components/UI/button/MyButton';
import { MyModal } from '../Components/UI/MyModal/MyModal';
import { PostForm } from '../Components/PostForm';
import { PostFilter } from '../Components/PostFilter';
import { PostList } from '../Components/PostList';
import { Pagination } from '../Components/UI/Pagination/Pagination';
import { Loader } from '../Components/UI/Loader/Loader';


function Posts() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState({sort:'', query: ''});
  const [modal, setModal] = useState(false);
  const [sortedAndSearchedPosts] = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetch(async ()=>{
    const response: any = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });


  const changePage = (page: number) => {
    setPage(page);
  }

  const createPost = (newPost: IPost) =>{
    setPosts([...posts, newPost])
    setModal(false);
  }


  const removePost = (post: IPost) =>{
    setPosts(posts.filter(item=> item.id !== post.id))
  }

  useEffect(()=>{
    fetchPosts();
  },[page])

  return (
    <div className="App">
      <MyButton style={{marginTop: '15px'}} onClick={()=> setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style={{margin:'15px'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h2>Ошибка загрузки постов: {postError.toString()}</h2>}
      {isPostsLoading
        ?<div style={{display: 'flex', justifyContent:'center', marginTop:'30px'}}><Loader/></div>
        :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
      }
      <Pagination
        changePage={changePage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts
