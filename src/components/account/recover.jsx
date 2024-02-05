import { useState } from "react"

export default function Recover() {
    const [userEmail, setUserEmail] = useState();

    const handleRecover = () => {
        console.log(userEmail);
    }

    return(
        <div>
            <form onSubmit={handleRecover}>
                <input type="text" name='email' onChange={(e) => setUserEmail(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}