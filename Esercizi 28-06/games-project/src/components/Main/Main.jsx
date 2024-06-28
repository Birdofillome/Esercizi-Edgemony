import posts from "../../data.json";
import "./Main.css";

function Section() {
    return (
        <section>
        <Main/>
        </section>
    );
    }

function Main() {
return (
        <main>
        {posts.map((article)=>(
        <Card key= {article.img} title={article.title} price={article.price}/>
        ))}
        </main>
    
)}

function Card(props) {
    const {img, title, price} = props;
    return (
    <div className="cardEl">
        <img src={img} alt={title} className="cardImg">{props.img}</img>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
    </div>
)}



export { Main, Section };