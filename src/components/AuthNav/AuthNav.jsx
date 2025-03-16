import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => (
  <div>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={s.link}>
      Log In
    </NavLink>
  </div>
);
