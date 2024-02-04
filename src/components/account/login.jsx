import { useState } from "react";

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
        <div>
            <form>
                <input type="input" name="username" value={userData.username} onChange={handleChange}></input>
                <input type="input" name="password" value={userData.password} onChange={handleChange}></input>
                <button onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
        </div>
    )
}