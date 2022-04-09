import React, { useRef, useState } from "react";
import "../Style/SignUp.css";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const refEmail = useRef();
    const refConfirmPassword = useRef();
    const refPassword = useRef();
    const {signup} = useAuth();
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(refConfirmPassword.current.value !== refPassword.current.value){
            return setError("Passwords do not match");
        }
        try{
            setError("")
            setLoading(true)
            await signup(refEmail.current.value, refPassword.current.value);
            history("/welcome");
        }catch{
            setError("Failed to create account")
        }
        setLoading(false)
    }
 
    return(
        <div className="SignUpForm">
            <div className="SignupComponent">
                <h3>Sign Up</h3>
                {error && <alert className='formError'>{error}</alert>}
                <p>Create your account easy with less information</p>
                <form autocomplete="off" onSubmit={handleSubmit}>
                    <div className="FormEmail formdiv">
                        <label>Email</label><br />
                        <input type="email" autoComplete="false" ref={refEmail} required/>
                    </div>
                    <div className="Formpassword formdiv">
                        <label>Password</label><br />
                        <input type="password" autoComplete="off" ref={refPassword} required/>
                    </div>
                    <div className="FormConfirmPassword formdiv">
                        <label>Confirm Password</label><br />
                        <input type="password" autoComplete="off" ref={refConfirmPassword} required/>
                    </div>
                    <button className="SignupBtn" disabled={loading} type="submit">Create Account</button>
                </form>
                <p className="needAcc">Already have account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    )
}