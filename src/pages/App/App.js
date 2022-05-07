import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ContactPage from '../ContactPage/ContactPage';
import CreatePage from '../CreatePage/CreatePage';
import EditPage from '../EditPage/EditPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Nav from '../../components/Nav/Nav';
// import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
// import styles from '../../index.css';
// import ReactDOM from 'react-dom';
// import UserLogOut from "./app/components/UserLogOut/UserLogOut";
import IndexPage from '../IndexPage/IndexPage';
import ShowPage from '../ShowPage/ShowPage';

export default function App() {
    const [user, setUser] = useState();
    const [chosenPost, setChosenPost] = useState({});

    useEffect(() => {
        setUser(getUser())
    }, [])

    return (
        <>
            <Nav user={user} setUser={setUser} />
            <main>
                {
                    user ?
                        <>
                            <Routes>
                                <Route path="/" element={<IndexPage setChosenPost={setChosenPost} />} />
                                <Route path="/:id" element={<ShowPage chosenPost={chosenPost} />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/new" element={<CreatePage />} />
                                <Route path="/edit/post/:id" element={<EditPage chosenPost={chosenPost} />} />
                                <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
                                <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
                            </Routes>
                        </>
                        :
                        <AuthPage setUser={setUser} />
                }
            </main>
        </>
    );
};