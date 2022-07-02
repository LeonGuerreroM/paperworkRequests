const express = require('express');
const success = require('../utils/successResponse');

const router = express.Routes();

    /** 
    * @module PostsRoutes
    */

    /**
    * @Function getPosts
    * @param {number} area wanted posts's area id
    * 
    * @returns {object} Posts List
    */
router.get('/feed', 
    async (req, res) => {
        const { area } = req.query;
        const posts = await service.getPosts(area);
        success(res, 200, 'posts', posts, 'posts list');
    }
);



/**
    * @Function getPost
    * @param {number} id wanted post id
    * 
    * @returns {object} wanted post
    */
router.get('/:id', 
    async (res, req) => {
        const { id } = req.params;
        const post = await service.getPost(id);
        success(res, 200, 'post', post, 'wanted post');
    }
)



    /**
     * @Function createPost
     * @param {number} idArea posts's area id
     * @param {string} content post's content
     * @param {number} idAcademicStatus Academic Status id related to the post
     * file: image
     * 
     * @returns {object} created post
     */
router.post('/createPost', 
    async (req, res) => {
        const { body } = req;
        const newPost = await service.createPost(body);
        success(res, 201, 'newPost', newPost, 'post created')
    }
);



    /**
     * @Function updatePost
     * @param {number} idArea posts's area id
     * @param {string} content post's content
     * @param {number} idAcademicStatus Academic Status id related to the post
     * file: image
     * 
     * @returns {object} updated post
     */
router.patch('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const { body } =  req;
        const updatedPost = await service.updatePost(id, body);
        success(res, 200, 'updatedPost', updatedPost, 'post updated');
    }
);

    /**
     * @Function deletePost
     * @param {number} id post's id
     * 
     * @returns {boolean} indicates successful deletion
     */

router.delete('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const deletedPostStatus = await service.deletePost(id);
        success(res, 200, 'result', deletedPostStatus, 'post deleted');
    }
);



module.exports = router;