import {About} from "../pages/About";
import Posts from "../pages/Posts";
import {PostIdPage} from "../pages/PostIdPage";
import {Login} from "../pages/Login";


interface IRoute {
  path: string;
  component: () => JSX.Element
}

export const privateRoutes:IRoute[] = [
  {path: '/about', component: About },
  {path: '/posts', component: Posts },
  {path: '/posts/:id', component: PostIdPage },
]

export const publicRoutes:IRoute[] = [
  {path: '/login', component: Login },
]