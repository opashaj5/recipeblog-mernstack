import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Nav from '../../components/Nav/Nav';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import styles from '../../index.css';
// import ReactDOM from 'react-dom';
// import UserLogOut from "./app/components/UserLogOut/UserLogOut";

export default function App() {
    const [user, setUser] = useState(getUser());
    return (
        <main>
            <Nav user={user} setUser={setUser} />
            {
                user ?
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                        <Route path="/contact" element={<ContactPage />}></Route>
                        <Route path="/shop" element={<ShopPage />}></Route>
                        <Route path="/new" element={<CreatePage />}></Route>
                        <Route path="/edit/post/:id" element={<EditPage />}></Route>
                        <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
                        <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
                    </Routes>
                    :
                    <AuthPage setUser={setUser} />
            }
        </main>
    );
};