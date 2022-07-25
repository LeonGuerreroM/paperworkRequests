const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /** 
    * @module PostsRoutes
    */

    /**
     * @name getPosts
     * @path {GET} /api/v1/posts/feed
     * 
     * @header {String} Authorization Bearer token (Student, Employee)
     * 
     * @response {Object} every registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/feed', 
    async (req, res) => {
        const { area } = req.query;
        const posts = await service.getPosts(area);
        success(res, 200, 'posts', posts, 'posts list');
    }
);



    /**
    * @name getPost
    * @path {GET} /api/v1/posts/:idPosts
    *
    * @header {String} Authorization Bearer token (Student, Employee)
    * 
    * @params {Number} idPost searched post id
    * 
    * @response {Object} requested element
    *
    * @code {200} correct element return
    * @code {401} in case of unmatched privileges or token absence
    * @code {404} in case of not founded element
    * @code {500} in case of internal errors with the request
    *
    */
router.get('/:idPost', 
    async (res, req) => {
        const { idPost } = req.params;
        const post = await service.getPost(idPost);
        success(res, 200, 'post', post, 'wanted post');
    }
)



    /**
   * @name createPost
   * @path {POST} /api/v1/posts/createPost
   * 
   * @header {String} Authorization Bearer token (Employee)
   *
   * @body {String} content post content
   * @body {Number} idArea related area id
   * @body {String} [image] picture related to the post
   * @body {Number} [idAcademicStatus] related academic status id
   * @body {String} [document] document related to the post
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/createPost', 
    async (req, res) => {
        const { body } = req;
        const newPost = await service.createPost(body);
        success(res, 201, 'newPost', newPost, 'post created')
    }
);



    /**
   * @name updatePost
   * @path {PATCH} /api/v1/posts/:idPost
   *
   * @header {String} Authorization Bearer token (Employee)
   *
   * @params {Number} idPost searched post id
   * 
   * @body {String} [content] post content
   * @body {Number} [idArea] related area id
   * @body {String} [image] picture related to the post
   * @body {Number} [idAcademicStatus] related academic status id
   * @body {String} [document] document related to the post
   * 
   * @response {Object} object.data updated element data
   *
   * @code {200} element updated
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {404} not founded user
   * @code {500} internal errors with the request
   *
   */
router.patch('/:idPost', 
    async (req, res) => {
        const { idPost } = req.params;
        const { body } =  req;
        const updatedPost = await service.updatePost(idPost, body);
        success(res, 200, 'updatedPost', updatedPost, 'post updated');
    }
);



    /**
   * @name deletePosts
   * @path {DELETE} /api/v1/posts/:idPosts
   *
   * @header {String} Authorization Bearer token (Employee)
   *
   * @params {Number} idPost searched post id
   *
   * @response {Boolean} object.confirmation done deletion boolean confirmation
   *
   * @code {200} in case of element deleted
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.delete('/:idPost', 
    async (req, res) => {
        const { idPost } = req.params;
        const deletedPostStatus = await service.deletePost(idPost);
        success(res, 200, 'result', deletedPostStatus, 'post deleted');
    }
);



module.exports = router;