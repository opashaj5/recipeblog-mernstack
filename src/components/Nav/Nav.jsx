import React from "react";
import { useState, useEffect } from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
// import UserLogOut from "../UserLogOut/UserLogOut";
import { logOut } from "../../utilities/users-service";
import UserLogOut from "../UserLogOut/UserLogOut";

export default function Nav({ user, setUser }) {
    const handleLogOut = () => {
        logOut()
        setUser(null)
        console.log("Clicked Log Out")
    };

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
    }, [toggle])

    return (
        <>
            <header className={styles.Nav}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img src={`https://i.imgur.com/GuiSbvm.png`} style={{ width: '25rem' }} id="logo" alt="blog logo"></img></Link>
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
                            </ul>
                        </div>
                        <UserLogOut user={user} setUser={setUser} handleLogOut={handleLogOut} toggle={toggle} setToggle={setToggle} />
                    </div>
                </nav>
            </header>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="navbar">
                                <div class="navbar-inner">
                                    <div class="container">
                                        <ul class="nav">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">RECIPES</a>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav >
            </header >
        </>
    );
};