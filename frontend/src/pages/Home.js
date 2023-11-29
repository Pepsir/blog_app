import { useEffect, useState } from "react"

// components
// import BlogDetails from "../components/BlogDetails"

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/blogs')
      const json = await response.json()

      if (response.ok) {
        setBlogs(json)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="home">
      <div className="blogs">
        {blogs && blogs.map((blog) => (
            <p key={blog._id}>{blog.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home