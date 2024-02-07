import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    const [userData, setUserData ] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user:userData})
        })
        .then((res) => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
        })
        .catch((error) => console.log(error))
    }

    return(
        <div className="login">
            <form className="login-form">
                <h1>Login</h1>
                <label>Username</label>
                <input type="input" name="username" value={userData.username} onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}></input>
                <button onClick={(e) => handleSubmit(e)}>Login</button>
                <Link to='/recover'>Forgot your password?</Link>
            </form>
            <img className="login-page-image" src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="game-photo"></img>
        </div>
    )
}