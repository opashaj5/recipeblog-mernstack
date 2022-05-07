import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className={styles.AboutPage}>
            <h1>About Me</h1>
            <div className={styles.GitHubLink}>
                <a href="https://github.com/opashaj5">
                    <img className={styles.GitHubImg} src="https://i.imgur.com/s7Y8UJl.jpg?2" alt="github" />
                </a>
            </div>
            <h5 className="card-title">Ornela Pashaj</h5>
            <p className="card-text">Software Engineer student who loves food</p>
        </div >
    )
};