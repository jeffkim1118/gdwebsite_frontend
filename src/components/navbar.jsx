import { useEffect, useState } from "react";
import SignOut from "./account/signout";

export default function Navbar(){

    return(
        <div>
            <nav>
                <a href="/">GD</a>
                <a href="#">Deals</a>
                <a href="#">News</a>
                <a href="#">Games</a>
                <input type="text"></input>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <SignOut/>
            </nav>
        </div>
    )
}