import {useMemo} from "react";
import {IPost} from "../Model/ModelPost";

export const useSortedPosts = (posts:IPost[], sort:string) => {
  const sortedPosts = useMemo(()=>{
    if(sort){
      return [...posts].sort((a,b)=> a[sort as keyof Pick<IPost, 'title' | 'body'>].localeCompare(b[sort as keyof Pick<IPost, 'title' | 'body'>]));
    }
    return posts;
  },[sort, posts]);

  return [sortedPosts];
}

export const usePosts = (posts: IPost[], sort: string, query: string) => {

  const [sortedPosts] = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return [sortedAndSearchedPosts];
}