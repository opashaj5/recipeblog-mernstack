import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowPage({ chosenPost }) {
    return (
        <div>
            <h1>{chosenPost.title}</h1>
            <h2>{chosenPost.img}</h2>
            <h3>{chosenPost.entry}</h3>
        </div>
    );
}