import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './ShowPage.module.css';

export default function ShowPage({ chosenPost }) {
    return (
        <>
            <div className={styles.ShowPage}>
                <div className={styles.ShowContainer}>
                    <h1>{chosenPost.title}</h1>
                    <img src={chosenPost.img} style={{ width: '50%' }} />
                    {/* <p>{chosenPost.entry}</p> */}
                </div>
                <div className={styles.ShowEntry}>
                    <p>{chosenPost.entry}</p>
                </div>
            </div>
            <Link to="/edit/post/:id"><button>Edit</button></Link>
            <a href="/"><button>Back</button></a>
        </>
    );
}