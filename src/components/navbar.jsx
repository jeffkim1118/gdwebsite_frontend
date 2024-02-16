import { useEffect, useState } from "react";
import SignOut from "./account/signout";
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from '../features/userSlice';

export default function Navbar() {
  const user = useSelector(selectUser);
  return (
    <div className="navigation-bar navbar fixed">
      <a className="btn btn-circle text-xl" href="/">GD</a>
      <div className="w-full ml-10">
        <a className="btn btn-ghost" href="/">First</a>
        <a className="btn btn-ghost" href="/login">Login</a>
        <a className="btn btn-ghost" href="/register">Register</a>
        {user ? <SignOut/>: null}
      </div>
    </div>
  );
}
