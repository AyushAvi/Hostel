import React, { useRef, useState } from "react";
import "../Style/SignUp.css";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";

export default function Login() {

    const refEmail = useRef();
    const refPassword = useRef();
    const {login} = useAuth();
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(refEmail.current.value, refPassword.current.value)
            history("/Dashboard");
        }catch{
            setError("Failed to log in")
        }
        setLoading(false)
    }
 
    return(
        <div className="SignUpForm">
            <div className="SignupComponent">
                <h3>Log in</h3>
                {error && <alert className='formError'>{error}</alert>}
                <p>Provide information to log in to your account</p>
                <form autocomplete="off" onSubmit={handleSubmit}>
                    <div className="FormEmail formdiv">
                        <label>Email</label><br />
                        <input type="email" autoComplete="false" ref={refEmail} required/>
                    </div>
                    <div className="Formpassword formdiv">
                        <label>Password</label><br />
                        <input type="password" autoComplete="off" ref={refPassword} required/>
                    </div>
                    <button className="SignupBtn" disabled={loading} type="submit">Log in</button>
                </form>
                <p className="needAcc">Need an account? <Link to="/">Sign Up</Link></p>
            </div>
        </div>
    )
}