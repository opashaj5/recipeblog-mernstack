import styles from "./ContactPage.module.css";

export default function ContactPage() {
    return (
        <main className={styles.ContactPage}>
            <div className="contact-page">
                <h2>Contact Me</h2>
                <article>
                    <div className="contact-card">
                        <img className="card-img-top" alt="card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Email</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </article><br></br>
                <button>Sign Up For Newsletters!</button>
            </div>
        </main>
    )
};