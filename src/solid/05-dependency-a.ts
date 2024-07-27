import { PostService } from './05-dependency-b';
import { DBService, JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {
    let provider: DBService = new JsonDatabaseService();
    provider = new LocalDataBaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();