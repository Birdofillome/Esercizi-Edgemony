import "./footer.css";


function Footer(){
    
    return (
        <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <div className="logo">Inserisci logo</div>
                <nav className="nav">
                    <FooterMenu/>
                </nav>
            </div>
        </div>
    </footer>
)
}

function FooterMenu(){
    const menuItems = [
        {
            label: "Shop and Learn",
            children: [
            { label: "Store" },
            { label: "Mac" },
            { label: "ipad" },
            { label: "iPhone" },
            { label: "Watch" },
            { label: "Vision" },
            { label: "AirPods" },
            { label: "TV & Home" },
            { label: "AirTag" },
            { label: "Accessories" },
            { label: "Gift Cards" },
            ],
        },
        {
            label: "Apple Wallet",
            children: [
            { label: "Wallet" },
            { label: "Apple Card" },
            { label: "Apple Pay" },
            { label: "Apple Cash" },
            ],
        },
        ];
return (
    <div className="footerList">
        {menuItems.map((item, index, array) => (
        <SottoMenu key = {`${item.label} ${index}`}
        label={item.label} href={item.href}/> 
        ))}

    </div>
)
}

function SottoMenu (props) {
    const {label, href="#", children = []} = props;
    const subItem = children
    .map((item)  => <li className="subItem">{item.label}</li>)
    return (
        <li className="item">
            <a href={href}>{label}</a>
        {/* {children.length > 0 ? subItem : ""} */}
        </li>
    )
}


export {Footer}; 