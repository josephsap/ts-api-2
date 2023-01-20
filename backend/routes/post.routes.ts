import express from 'express';
import { handleCreatePost, handleGetAllPosts, handleGetSinglePost, handleDeletePost, handleUpdatePost, handleGetPostsByUser } from '../controllers/PostController';

const router = express.Router();

router.route('/pbu').get(handleGetPostsByUser);
router.route('/:id').get(handleGetSinglePost);
router.route('/').get(handleGetAllPosts);
router.route('/create').post(handleCreatePost);
router.route('/:id').delete(handleDeletePost);
router.route('/update/:id').patch(handleUpdatePost);


export default router;

// "data": {
//         "post": {
//             "title": "second one associate this post with snoopy",
//             "content": "second one eaaaaaa Finally, let's add TypeORM to the application. In this example, we will use mysql driver. Setup process for other drivers is similar.",
//             "user": {
//                 "id": "87b87dec-ed1e-47c6-bb57-6b6861bbc70b",
//                 "created_at": "2023-01-18T21:14:44.439Z",
//                 "updated_at": "2023-01-18T21:14:44.439Z",
//                 "name": "snoopy",
//                 "age": 10,
//                 "role": "regular",
//                 "createdAt": "2023-01-20T18:20:31.341Z",
//                 "updatedAt": "2023-01-20T18:20:31.341Z"
//             },
//             "id": "610bceed-ca08-4b18-9c3e-b642f2622738",
//             "created_at": "2023-01-20T21:45:37.472Z",
//             "updated_at": "2023-01-20T21:45:37.472Z",
//             "createdAt": "2023-01-20T21:45:37.472Z",
//             "updatedAt": "2023-01-20T21:45:37.472Z"
//         }
//     }
// }