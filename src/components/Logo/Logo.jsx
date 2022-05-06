import styles from './Logo.module.css';

export default function Logo() {
    return (
        <header className={styles.Logo}>
            <img class="img-fluid" src="https://i.imgur.com/GuiSbvm.png" />
        </header>
    );
}