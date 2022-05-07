import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function IndexPage({ setChosenPost }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await axios.get("/api/posts")
                setPosts(response.data)
                setLoading(false)
                // console.log(posts)
            } catch (err) {
                console.log(err)
            }
        })()
    }, []);

    if (loading) {
        return (
            <h2>loading</h2>
        )
    }

    return (
        <>
            <h1 class="header text-center">What's For Dinner?</h1>
            <div className="anchor-wrapper">
            </div>
            <div className="container">
                <div className="card-wrapper">
                    {posts.map((post, idx) => {
                        return (
                            <Link to={`/${post._id}`} onClick={() => { setChosenPost(post) }}>
                                <div className="card" key={idx} style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={post.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.entry}</p>
                                        <a href={`/${post._id}`} className="btn btn-info">View Full Recipe</a>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}