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
                    <h3>{showLogin ? 'Not a member? ' : 'Have an account? '}<span onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</span></h3>
                </div>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </main>
        </>
    );
}