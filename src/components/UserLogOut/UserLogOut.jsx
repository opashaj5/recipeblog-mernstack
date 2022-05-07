import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser, toggle, setToggle }) {
    function handleLogOut() {
        logOut();
        setUser(null);
        setToggle(!toggle)
    }

    return (
        <div className={styles.UserLogOut}>
            <a className="btn me-auto mb-2 mb-lg-0" onClick={handleLogOut}>LOG OUT</a>
        </div >
    );
}