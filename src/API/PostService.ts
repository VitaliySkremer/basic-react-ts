import axios from "axios";
import {IPost} from "../Model/ModelPost";

export default class PostService {
  static async getAll(limit = 10, page = 1){
    return await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts',{
      params:{
        _limit: limit,
        _page: page
      }
    })
  }

  static async getById(id: string){
    return await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  static async getComments(id: string){
    return await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
