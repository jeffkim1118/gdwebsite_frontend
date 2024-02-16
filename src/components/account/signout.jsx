import{useDispatch} from 'react-redux';
import { logout } from '../../features/userSlice';
export default function SignOut(){
    
    const dispatch = useDispatch();
    const handleSignOut = (e) => {
        e.preventDefault()
        dispatch(logout())
        localStorage.removeItem('token');
        // fetch(`http://localhost:3000/signout`,{
        //     method: 'DELETE'
        // })
        // .then((res) => res.json())
        // .then(data => console.log(data))
        // .catch((error) => console.log(error))
    }
    
    return(
        <div>
            <button className='btn' onClick={(e)=>{handleSignOut(e)}}>Sign Out</button>
        </div>
    )
}