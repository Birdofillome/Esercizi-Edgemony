import posts from "../data.json";
import "./main.css";

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
        <Card key= {article.id} title={article.title} body={article.body}/>
        ))}
        </main>
    
)}

function Card(props) {
    const {id, title, body} = props;
    return (
    <div className="cardEl">
        <span>{props.id}</span>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
)}



export { Main, Section };