export default function SignOut(){
    const handleSignOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token');
        fetch(`http://localhost:3000/signout`,{
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch((error) => console.log(error))
    }
    
    return(
        <div>
            <button onClick={(e)=>{handleSignOut(e)}}>Sign Out</button>
        </div>
    )
}