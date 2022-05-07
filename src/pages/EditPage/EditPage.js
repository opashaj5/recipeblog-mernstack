import EditPost from "../../components/EditPost/EditPost";
import styles from './EditPage.module.css';
import { Link } from "react-router-dom";

export default function EditPage() {
    return (
        <main className={styles.EditPage}>
            <div className={styles.EditContainer}>
                <EditPost />
            </div>
            <Link to="/"><button>Back To Main Page</button></Link>
        </main>
    );
};