const Blog = require('../models/Blog')
const mongoose = require('mongoose')

// get all blogs
const getblogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})

    res.status(200).json(blogs)

};

// get single blog
const getSingleBlog = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog'})
    }

    const blog = await Blog.findById(id)

    if (!blog){
        return res.status(404).json({error: 'no such blog'})
    }

    res.status(200).json(blog)
};

// create a new blog
const createBlog = async (req, res) => {
    const { title, author, content } = req.body

    //add to database
    try {
        const blog = await Blog.create({title, author, content})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


// delete a blog
const deleteBlog = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog'})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if (!blog){
        return res.status(400).json({error: 'No such blog'});
    }

    res.status(200).json(blog)
};

// update a blog
const updateBlog = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog'})
    }

    const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body})

    if (!blog){
        return res.status(400).json({error: 'No such blog'})
    }

    res.status(200).json(blog)
};



module.exports = {
    createBlog,
    getblogs,
    getSingleBlog,
    deleteBlog,
    updateBlog
}