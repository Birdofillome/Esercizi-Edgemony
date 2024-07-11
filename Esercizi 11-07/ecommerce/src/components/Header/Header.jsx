import styles from "./Header.module.css";

function Header() {
    return <header>
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className="logo">
                
            </div>
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
            ];
    
        return  (
        <nav className={styles.nav}>
        <ul className={styles.list}>
        {items.map((item, index, array) =>(
    <MenuItems key={`${item.label}-${index}`} 
    label={item.label} href={item.href}/>))}
        </ul>
        <ul className={styles.cart}>
            <li><img className={styles.iconcart} src="icon-cart.svg" alt="cart"/><a href="#"></a></li>
            </ul>
    </nav>
    );
    }


    function MenuItems (props) {
        const {label, href = "#"} = props;
        
            return (
            <li className={styles.item}><a href={href}>{label}</a></li>
        )}
        
    export default  Header ;