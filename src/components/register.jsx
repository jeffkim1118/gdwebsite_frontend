import { useState } from "react"
export default function Register() {
    const [newUser, setNewUser] = useState({
        username:"",
        password:"",
        email:"",
        first_name:"",
        last_name:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewUser((prevNewUserData) => ({
            ...prevNewUserData,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({user:newUser})
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch((error) => console.log(error))
    }
    return(
        <div>
            <form>
                <input type="input" name="username" value={newUser.username} onChange={handleChange} placeholder="username"></input>
                <input type="input" name="password" value={newUser.password} onChange={handleChange} placeholder="password"></input>
                <input type="input" name="email" value={newUser.email} onChange={handleChange} placeholder="email"></input>
                <input type="input" name="first_name" value={newUser.first_name} onChange={handleChange} placeholder="first name"></input>
                <input type="input" name="last_name" value={newUser.last_name} onChange={handleChange} placeholder="last name"></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}