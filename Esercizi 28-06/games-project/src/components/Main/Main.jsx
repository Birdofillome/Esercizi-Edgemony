import posts from "../../data.json";
import "./Main.css";

function Section() {
    return (
        <section>
            <h1 className="titleCategories">Populars</h1>
        <Main/>
        </section>
    );
    }

function Main() {
return (
        <main>
        {posts.map((article)=>(
        <Card key={article.id} title={article.title} price={article.price} img={article.img}/>
        ))}
        </main>
    
)}

function Card(props) {
    const {img, title, price, id} = props;
    return (
    <div className="cardEl">
        <img src={img} alt={title} className="cardImg"></img>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
    <div className="buttonContain"><button className="add-kart">BUY</button></div>
    </div>
    
)}



export { Main, Section };