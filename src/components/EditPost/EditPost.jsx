import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

export default function EditPost(props) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [buttonPressed, setButtonPressed] = useState(false)
    const navigate = useNavigate();
    const title = useRef()
    const img = useRef()
    const entry = useRef()

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await axios.get("/api/posts/:id")
                setPosts(response.data)
                setLoading(false)
                // console.log(posts)
            } catch (err) {
                console.log(err)
            }
        })()
    }, []);

    const handleSubmit = async (id) => {
        try {
            console.log(`test`)
            const response = await axios.post('/api/posts', {
                title: title.current.value, img: img.current.value, entry: entry.current.value
            })
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/posts/${id}`, {
            })
            if (response.status === 200) {
                setButtonPressed(!buttonPressed)
            } else {
                console.log('Something went wrong')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h2>Edit Recipe:</h2>
            <div className="edit-post">
            </div>
            <div className="container">
                <div className="card-wrapper">
                    {posts.map((posts, idx) => {
                        return (
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input placeholder="Recipe Name" className="input-style" name="title" type="text" /><br />
                                    <input placeholder="Image Source" className="input-style" name="img" type="url" /><br />
                                    <textarea placeholder="Cooking Ingredients &amp; Instructions" className="entry-style" name="entry" /><br />
                                    <input id="btn" type="submit" value="Submit" />
                                </form>
                                <div>
                                    <button onClick={() => { handleDelete(posts._id) }} className="button">Delete</button>
                                </div>
                                <Link to="/"><button>Back To Main Page</button></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}