import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,
            {
                method: 'DELETE'
            })
            .then(() => console.log("blog deleted"));
        history.push('/');
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;