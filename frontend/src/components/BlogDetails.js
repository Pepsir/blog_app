const BlogDetails = ({ blog }) => {

    return (
      <div className="blog-details">
        <h4>{blog.title}</h4>
        <p><strong>Author: </strong>{blog.author}</p>
        <p><strong>Content</strong>{blog.content}</p>
        <p>{blog.createdAt}</p>
      </div>
    )
  }
  
  export default BlogDetails