import Card, { ICard } from "../app/components/Card";

// const blogpost: ICard = {
//   id: "1",
//   category: "Thriller",
//   title: "Il Silenzio degli Innocenti",
//   description: "Hannibal Lecter è uno psichiatra geniale, un uomo colto e raffinato. Ed è anche un pericoloso psicopatico e un feroce assassino. Ma è l'unica risorsa che ha a disposizione la giovane agente dell'FBI Clarice Starling per rintracciare Buffalo Bill.",
//   image: "https://www.ibs.it/images/9788804716082_0_536_0_75.jpg",
//   author: {
//     name: "Thomas Harris",
//   },
// };

// export default function Home() {
//   return (
//     <main>
//       <Card post={blogpost} />
//     </main>
//   );
// }

const blogposts: ICard[] = [
  {
    id: "1",
    category: "Thriller",
    title: "Il Silenzio degli Innocenti",
    description: "Hannibal Lecter è uno psichiatra geniale, un uomo colto e raffinato. Ed è anche un pericoloso psicopatico e un feroce assassino. Ma è l'unica risorsa che ha a disposizione la giovane agente dell'FBI Clarice Starling per rintracciare Buffalo Bill.",
    image: "https://www.ibs.it/images/9788804716082_0_536_0_75.jpg",
    author: "Thomas Harris",
  },
  {
    id: "2",
    category: "Fantasy",
    title: "Il Signore degli Anelli",
    description: "In un'epoca remota, la Terra di Mezzo è abitata da razze magiche e uomini. Un piccolo hobbit, Frodo, deve intraprendere un pericoloso viaggio per distruggere un anello malvagio.",
    image: "https://www.ibs.it/images/2570161050193_0_0_536_0_75.jpg",
    author: "J.R.R. Tolkien",
  },
  {
    id: "3",
    category: "Narrativa Horror",
    title: "It",
    description: "It, il mostro misterioso che prende la forma delle nostre peggiori paure, Bill e il gruppo di amici con i quali ha fondato il Club dei Perdenti, devono affrontare prove durissime e rischiare la loro stessa vita.",
    image: "https://www.ibs.it/images/9788868365622_0_536_0_75.jpg",
    author:"Stephen King",
  },

];

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Book Collection</h1>
      <div className="flex flex-wrap gap-4 justify-center">
      {blogposts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      </div>
    </main>
  );
}


