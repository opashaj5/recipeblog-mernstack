import styles from "./AboutPage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <main className={styles.AboutPage}>
            <div className="about-page">
                <h2>The Creator</h2>
                <article>
                    <div className="about-card">
                        <img className="card-img-top" alt="card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Ornela Pashaj</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </article><br></br>
                <Link to="/contact"><button>Contact Me</button></Link>
            </div>
        </main>
    )
};