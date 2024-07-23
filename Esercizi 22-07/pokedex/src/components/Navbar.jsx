import { NavLink } from "react-router-dom";
import { labels } from "../data/label";
import "./navbar.css"
const menuList = [{ name: labels.navHome, path: "/" }];

const NavBar = () => {
return (
    <nav className="navbar">
    <NavLink to={"/"} className="logo"> Pokédex
        </NavLink>
        <ul className="nav-menu">
        {menuList.map((item, index) => (
        <li key={index}>
            <NavLink
            className={({ isActive }) => {
                return isActive ? "" : "";
            }}
            to={item.path}
            >
            {item.name}
            </NavLink>
        </li>
        ))}
        </ul>
    </nav>
);
};

export default NavBar;