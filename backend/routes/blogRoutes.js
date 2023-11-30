const express = require('express');
const {
    createBlog,
    getblogs,
    getSingleBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')
const requireAuth = require('../middleware/requireAuth')

// require Auth for all blog routes
const router = express.Router();

router.use(requireAuth)

//Get ALL blogs
router.get('/', getblogs)

// get a single blog
router.get('/:id', getSingleBlog)

// post a new blog
router.post('/', createBlog)

// delete a blog
router.delete('/:id', deleteBlog)

// update a blog
router.patch('/:id', updateBlog)



module.exports = router