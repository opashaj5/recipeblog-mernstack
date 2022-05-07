import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import styles from './NewPost.module.css';

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
        <main className={styles.NewPost}>
            <div className="newCardOuterWrapper">
                <div className="createNewCard">
                    <div className={styles.NewPostContainer}>
                        <h1>Create New Recipe</h1>
                        <form onSubmit={handleSubmit}>
                            <input className={styles.createInput} placeholder="Recipe Name" type="text" ref={title} /><br></br>
                            <input className={styles.createInput} placeholder="Image" type="text" ref={img} /><br></br>
                            <input className={styles.createInput} placeholder="Ingredients &amp; Instructions" type="text" ref={entry} /><br></br>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <a href="/"><button className={styles.backBtn}>Back To Home Page</button></a>
                </div>
            </div>
        </main>
    )
}