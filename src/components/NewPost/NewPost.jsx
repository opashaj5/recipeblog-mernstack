import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function NewPost(props) {
    const navigate = useNavigate();
    const title = useRef()
    const img = useRef()
    const entry = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(`test`)
            const response = await axios.post("/api/posts", {
                title: title.current.value, img: img.current.value, entry: entry.current.value
            })
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="newCardOuterWrapper">
            <div className="createNewCard">
                <h1>Create New Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Recipe Name' type="text" ref={title} />
                    <input placeholder='Image Source' type="text" ref={img} />
                    <input placeholder='Cooking Ingredients &amp; Instructions' type="text" ref={entry} />
                    <input type="submit" value="Submit" />
                </form>
                <a href="/"><button>Back To Home Page</button></a>
            </div>
        </div>
    )
}