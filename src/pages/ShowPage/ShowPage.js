import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import styles from './ShowPage./ShowPage';

export default function ShowPage({ chosenPost }) {
    return (
        <>
            <div>
                <h1>{chosenPost.title}</h1>
                <img src={chosenPost.img} />
                <h3>{chosenPost.entry}</h3>
            </div>
            <Link to="/edit/post/:id"><button>Edit</button></Link>
            <a href="/"><button>Back</button></a>
        </>
    );
}