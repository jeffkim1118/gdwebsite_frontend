import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { handleLogin, login } from "../../features/userSlice";

export default function Login() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await dispatch(handleLogin(userData));
            console.log(response)
            if(!response.payload.error){
                dispatch(login(response.payload));
            }else{
                console.log("invalid account")
            }
        }catch(error){
            console.log("Login error: ", error);
        }
        
        // fetch('http://localhost:3000/login', {
        //     method:"POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({user:userData})
        // })
        // .then((res) => res.json())
        // .then(data => {
        //     localStorage.setItem('token', data.token)
        // })
        // .catch((error) => console.log(error))
    }

    return(
        <div className="login">
            <form className="login-form">
                <h1>Login</h1>            
                <input type="input" name="username" value={userData.username} onChange={handleChange} placeholder="Username"></input>
                <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password"></input>
                <button onClick={(e) => handleSubmit(e)}>Login</button>
                <Link to='/recover'>Forgot your password?</Link>
            </form>
        </div>
    )
}