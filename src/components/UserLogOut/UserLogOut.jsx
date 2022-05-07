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
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}