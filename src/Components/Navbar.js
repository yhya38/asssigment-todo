import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


function Navbar() {
    const { signout } = useAuth();
    const history=useHistory()

    const handleSignout = () => {
        signout();
        history.push("/");
    }
    return (
        <div className="navbar">
            <h2>Logo</h2>
            <Link to='/home'>Home</Link>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/user'>User</Link>
           <button onClick={handleSignout}>Log out</button>
        </div>
    )
}

export default Navbar
