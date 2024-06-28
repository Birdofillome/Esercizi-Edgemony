import "./header.css";

function Header() {
return <header>
<div className="container">
    <div className="wrapper">
        <div className="logo">Inserisci logo</div>
        <Menu/>
    </div>
</div>
</header>
}

function Menu() {

    const items = [
        { label: "I nostri prodotti", href:"https://www.apple.com/us-edu/store" },
        { label: "Cerca con Google", href: "https://google.it" },
        ];

    return  (
    <nav className="nav">
    <ul className="list">
    {items.map((item, index, array) =>(
    <MenuItems key={`${item.label}-${index}`} 
    label={item.label} href={item.href}/>))}
    </ul>
</nav>
);
}

function MenuItems (props) {
const {label, href = "#"} = props;

    return (
    <li className="item"><a href={href}>{label}</a></li>
)}

export { Header };