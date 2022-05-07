import styles from "./ContactPage.module.css";
import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <main className={styles.ContactPage}>
            <div className={styles.ContactContainer}>
                <h1>Contact Me</h1>
                <a href="https://linkedin.com/in/ornelapashaj" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ornelapashaj" height="30" width="40" /></a>
                <a href="https://instagram.com/hellanela" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="hellanela" height="30" width="40" /></a>
                <a href="https://twitter.com/ornelapashaj" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="ornelapashaj" height="30" width="40" /></a>
            </div>
        </main >
    )
};