import React, { useState, useEffect } from "react";
import "../Style/Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate  } from "react-router-dom";
import { onValue } from "firebase/database";

import {db} from "../firebase";
import {ref} from "firebase/database"


export default function Dashboard(){

    const[error, setError] = useState("")
    const[todo, setTodo] = useState([]);
    const {currentUser} = useAuth();
    const history = useNavigate();

    useEffect(() =>{
        onValue(ref(db, `/${currentUser.uid}`), snapshot => {
            setTodo([])
            const data = snapshot.val();
            Object.values(data).map((todo) => {
                setTodo(oldArray => [...oldArray, todo])
            });
        })
    },[])

    async function handlelogout(){
        setError("")

        try{
            // await logout();
            localStorage.removeItem("Name");
            localStorage.removeItem("Floor");
            localStorage.removeItem("Room");
            history("/login");
        }catch{
            setError("Failed to Logout")
        }
    }

    function handleStorage(){
        localStorage.setItem("Name", todo[1]);
        localStorage.setItem("Floor", todo[0]);
        localStorage.setItem("Room", todo[2]);
    }

    return(
        <div className="DashboardContainer">
            <div className="DashboardComponent">
                <p>Hello</p>
                <h3 className="userName">{todo[1]}</h3>
                <div className="DashboardDetail">
                    <div className="floor">
                        <p>Your Floor</p>
                        <h3 className="userFloor">{todo[0]}</h3>
                    </div>
                    <div className="floor">
                        <p>Your Room</p>
                        <h3 className="userFloor">{todo[2]}</h3>
                    </div>
                </div>
                <button className="updateprofilebtn" onClick={handleStorage}>Store Locally</button>
            </div>
            <button className="logoutBtn" onClick={handlelogout}>Log Out</button>
            {error && <alert className="formAlert">{error}</alert>}
        </div>
    )
}