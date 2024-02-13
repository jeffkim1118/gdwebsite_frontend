import { useEffect, useState } from "react";
import SignOut from "./account/signout";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed">
      <a className="btn btn-ghost text-xl" href="/">GD</a>
      <div>
        <a className="btn btn-ghost" href="/">First</a>
        <a className="btn btn-ghost" href="/login">Login</a>
        <a className="btn btn-ghost" href="/register">Register</a>
      </div>

      {/* <nav className="navigation-bar">
                <a href="/">GD</a>
                <a href="#">Deals</a>
                <a href="#">News</a>
                <a href="#">Games</a>
                <input type="text"></input>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <SignOut/>
            </nav> */}
    </div>
  );
}
