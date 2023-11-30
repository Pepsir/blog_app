import { useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'

const BlogForm = () => {
    const { dispatch } = useBlogsContext()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = {title, author, content}

        const response = await fetch('/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            setTitle('')
            setAuthor('')
            setContent('')
            dispatch({type: 'CREATE_BLOG', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new blog</h3>

            <label>Blog Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Author:</label>
            <input 
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
            />

            <label>Content: </label>
            <textarea 
                type="text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />

            <button>Add Blog</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default BlogForm