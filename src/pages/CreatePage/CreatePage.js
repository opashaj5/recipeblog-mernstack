import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NewPost from "../../components/NewPost/NewPost";


export default function CreatePage() {
    return (
        <div>
            <NewPost />
        </div>
    );
};