import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {db} from "../firebase";
import { set, ref} from "firebase/database"
import "../Style/Welcome.css";

export default function Welcome(){

    const [floorValue, setFloor] = useState('');
    const [gender, setGender] = useState('');
    const [roomValue, setRoom] = useState('');
    const [name, setName] = useState('');
    const history = useNavigate();
    const {currentUser} = useAuth();

    function handleName(e){
        setName(e.target.value);
    }

    function floor(e){
        setGender(e.target.value);
    }

    function room(e){
        return gender + e;
    }

    function handleFloor(e){
        setFloor(e.target.value)
    }

    function handleRoom(e){
        setRoom(e.target.value);
    }

    function handleUpdate(){
        const response = set(ref(db, `/${currentUser.uid}`),{
                            floorValue,
                            roomValue,
                            name,
                        });
        
        if(response){
            history("/Dashboard");
        }
    }

    // async function handleUpdate(e) {
    //     console.log("https://hostel-allocation-assign-a927b-default-rtdb.firebaseio.com/" + currentUser.uid + ".json");
    //     e.preventDefault();
    //     const response = await fetch(
    //         "https://hostel-allocation-assign-a927b-default-rtdb.firebaseio.com/" + currentUser.uid + ".json",
    //         {
    //             method : "POST",
    //             headers : {
    //                 "Content-Type": "application/jason",
    //             },
    //             body : JSON.stringify({
    //                 floorValue,
    //                 gender,
    //                 roomValue,
    //             }),
    //         });

    //     if(response) {
    //         history("/Dashboard");
    //     }else{
    //         alert('Please provide complete information.');
    //     }
    // }


    return(
        <div className="welcome">
            <div className="welcomeComponent">
                <div className="name" onChange={handleName}>
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" name="name" value = {name} id="name"/>
                </div>
                <div className="gender" onChange={floor}>
                    <div className="genderfemale">
                        <input type="radio" name="gender" value = "G" id="femalegender"/>
                        <label htmlFor="femalegender">Girl</label>
                    </div>
                    <div className="gendermale">
                        <input type="radio" name="gender" Value="B" id="malegender"/>
                        <label htmlFor="malegender">Boy</label>
                    </div>
                </div>
                <div className="selectFloor">
                    <label htmlFor="floor">Select Floor</label>
                    <select name="floor" id="floor" onChange={handleFloor}>
                        <option value="Select">Select</option>
                        <option value="1st">1</option>
                        <option value="2nd">2</option>
                        <option value="3rd">3</option>
                        <option value="4th">4</option>
                        <option value="5th">5</option>
                    </select>
                </div>
                <div className="selectRoom" onChange={handleRoom}>
                    <div className="roomOption">
                        <div className="room">
                            <input type="radio" name="room" value={room(1)} id={room(1)} />
                            <label htmlFor={room(1)}>{room(1)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(2)} id={room(2)} />
                            <label htmlFor={room(2)}>{room(2)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(3)} id={room(3)} />
                            <label htmlFor={room(3)}>{room(3)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(4)} id={room(4)} />
                            <label htmlFor={room(4)}>{room(4)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(5)} id={room(5)} />
                            <label htmlFor={room(5)}>{room(5)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(6)} id={room(6)} />
                            <label htmlFor={room(6)}>{room(6)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(7)} id={room(7)} />
                            <label htmlFor={room(7)}>{room(7)}</label>
                        </div>
                        <div className="room">
                            <input type="radio" name="room" value={room(8)} id={room(8)} />
                            <label htmlFor={room(8)}>{room(8)}</label>
                        </div>
                    </div>
                    <h3>You have selected room {roomValue} of {floorValue} floor</h3>
                </div>
            </div>
            <button className="confrimBtn" onClick={handleUpdate}>Confirm</button>
        </div>
    )
}