import React from "react";
import { useState } from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";
import { logOut } from "../../utilities/users-service";
import Logo from "../Logo/Logo";

export default function Nav({ user, setUser }) {
    const handleLogOut = () => {
        logOut()
        setUser(null)
        console.log("Clicked Log Out")
    };

    return (
        <main className={styles.Nav}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={Logo} id="logo" alt="blog logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders/new" className="nav-link">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new" className="nav-link">CREATE</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Recipes</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/categories" class="dropdown-item">Categories</Link>
                                    </li>
                                    <UserLogOut user={user} setUser={setUser} />
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </main>
    );
};