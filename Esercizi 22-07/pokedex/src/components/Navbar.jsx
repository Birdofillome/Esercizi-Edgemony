import { NavLink } from "react-router-dom";
import { labels } from "../data/label";
import "./navbar.css"
const menuList = [
    {name: labels.navHome, path: "/" },
    {name: labels.navCreate, path: "create"},
    {name: labels.navEdit, path: "edit"}
];

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
        <li><a href="#">Shop</a></li>
        </ul>
    </nav>
);
};

export default NavBar;