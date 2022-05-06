import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <Logo />
            <main className={styles.AuthPage}>
                <div>
                    <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not a member? SIGN UP' : 'Have an account? LOG IN'}</h3>
                </div>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </main>
        </>
    );
}