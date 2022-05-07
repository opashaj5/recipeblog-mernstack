import React, { useState } from 'react';
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
import IndexPage from '../IndexPage';
import ShowPage from '../ShowPage';
import Logo from '../../components/Logo/Logo';

export default function App() {
    const [user, setUser] = useState();
    const [chosenPost, setChosenPost] = useState({});

    return (
        <>
            <Nav />
            <main>
                {
                    user ?
                        <>
                            <Routes>
                                <Route path="/" element={<IndexPage setChosenPost={setChosenPost} />}></Route>
                                <Route path="/:id" element={<ShowPage chosenPost={chosenPost} />}></Route>
                                <Route path="/about" element={<AboutPage />}></Route>
                                <Route path="/contact" element={<ContactPage />}></Route>
                                {/* <Route path="/shop" element={<ShopPage />}></Route> */}
                                <Route path="/new" element={<CreatePage />}></Route>
                                <Route path="/edit/post/:id" element={<EditPage />}></Route>
                                <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />}></Route>
                                <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />}></Route>
                            </Routes>
                        </>
                        :
                        <AuthPage setUser={setUser} />
                }
            </main>
        </>
    );
};