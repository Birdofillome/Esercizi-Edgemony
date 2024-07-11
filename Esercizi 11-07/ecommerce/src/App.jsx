import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import IconCart from "./components/icons/IconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
function App() {
  return (
    <>
    <Header/>
    <div className={styles.main}>
    <ProductLightBox/>
      <div className={styles.containerbtn}>
        <h1>Diablo IV</h1>
        <p>Diablo IV è l'esperienza GdR d'azione di nuova generazione con infiniti mali da massacrare, innumerevoli abilità da padroneggiare, spedizioni da incubo e bottino leggendario.

Diablo 4 è il quarto capitolo della celebre saga di videogiochi di ruolo e azione di Blizzard Entertainment ambientata in un mondo dark fantasy. Il gioco è disponibile per PC, PlayStation 4, PS5, Xbox Series X|S e Xbox One. Diablo 4 riprende le meccaniche di gioco dei precedenti episodi, offrendo al giocatore la possibilità di scegliere tra diverse classi di personaggi, ognuna con abilità e stili di combattimento unici. Il gioco presenta una vasta mappa esplorabile, ricca di nemici, missioni, segreti e tesori.

Il gioco è caratterizzato da una forte componente online, che permette al giocatore di interagire con altri giocatori, sia cooperando che competendo. Diablo 4 punta ad essere il capitolo più oscuro e spaventoso della serie, con una grafica realistica e dettagliata, una colonna sonora coinvolgente e una trama avvincente in grado di evolversi ed espandersi negli anni, grazie all'arrivo di nuovi contenuti e stagioni.</p>
      <h2>Prezzo: 39.90€</h2>
      <Button>
        <IconCart fill="#000" />
      </Button>
      <Counter />
      </div>
      </div>
    </>
  );
}

export default App;