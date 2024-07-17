import './Navbar.css';
const menuList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cart", path: "/cart" },
];

const NavBar = () => {
    return (
        <nav>
        <h1>E-commerce</h1>
        <ul>
            {menuList.map((item, index) => (
            <li key={index}>
            <a href={item.path}>{item.name}</a>
            </li>
        ))}
        </ul>
</nav>
    );
};

export default NavBar;