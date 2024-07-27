import {DBService} from './05-dependency-c'

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private _postProvider: DBService) {}

    async getPosts() {
       
        this.posts = await this._postProvider.getPosts();

        return this.posts;
    }
}
