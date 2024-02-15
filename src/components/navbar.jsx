import { useEffect, useState } from "react";
import SignOut from "./account/signout";

export default function Navbar() {
  return (
    <div className="navigation-bar navbar fixed">
      <a className="btn btn-circle text-xl" href="/">GD</a>
      <div className="w-full ml-10">
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
