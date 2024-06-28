import "./Header.css";

function Header() {
    return <header>
    <div className="container">
        <div className="wrapper">
            <div className="logo">Inserisci logo</div>
        </div>
        <Menu/>
    </div>
    </header>
    }
    
    function Menu() {

        const items = [
            { label: "Home", href:"#" },
            { label: "Categories", href: "#" },
            { label: "My Library", href: "#" },
            { label: "My Bag", href: "#" },
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