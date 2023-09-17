import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('newAuthor1');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {title, body, author};
        
        setIsLoading(true);

        fetch('http://localhost:8000/blogs/',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBlog)
            })
            .then(() => setIsLoading(false))
        // history.go(-1);
        history.push('/');
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="newAuthor1">newAuthor1</option>
                    <option value="newAuthor2">newAuthor2</option>
                </select>
                {isLoading && <button disabled>Adding Blog...</button>}
                {!isLoading && <button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;