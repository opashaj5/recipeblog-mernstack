import "./NewPost.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NewPost() {
    return (
        <div className="new-post">
            <h2>Create a New Post</h2>
            <form action="/" method="POST">
                Recipe Name: <input className="input-style" name="title" type="text" /><br />
                Image URL: <input className="input-style" name="img" type="url" /><br />
                Entry: <textarea className="entry-style" name="entry" /><br />
                <input id="btn" type="submit" value="Submit" />
            </form>
            <a href="/users/home"><button>Back To Main Page</button></a>
        </div>
    )
};