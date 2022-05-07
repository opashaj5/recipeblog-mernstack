import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className={styles.AboutPage}>
            <div className={styles.AboutContainer}>
                <h1>The Creator</h1>
                <div className={styles.GitHubLink}>
                    <a href="https://github.com/opashaj5">
                        <img className={styles.GitHubImg} src="https://i.imgur.com/s7Y8UJl.jpg?2" alt="github" />
                    </a>
                </div>
                <h5>Ornela Pashaj</h5>
                <p>Software Engineer student who loves food</p>
                <p>This is a MERN Stack Application</p>
            </div >
        </div>
    )
};