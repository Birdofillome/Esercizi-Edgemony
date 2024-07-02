import styles from './card.module.css';
import { useState } from 'react';

const adviceList = [
    "Once you find a really good friend don't do anything that could mess up your friendship.",
    "If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.",
    "Don't always rely on your comforts.",
    "Drink a glass of water before meals.",
    "Everything matters, but nothing matters that much."
];

function Card() {
    const [advice, setAdvice] = useState(adviceList[2]);
    const getRandomAdvice = () => {
      const randomIndex = Math.floor(Math.random() * adviceList.length);
    setAdvice(adviceList[randomIndex]);
    };

return <div className="card">
<div className={styles.container}>
        <div className={styles.adviceBox}>
        <h1 className={styles.title}>Advice #117</h1>
        <p className={styles.adviceText}>"{advice}"</p>
        <img src="pattern-divider-desktop.svg" alt="pattern" className={styles.pattern}/>
        <button className={styles.button} onClick={getRandomAdvice}>
            <img src="icon-dice.svg" alt="dado" className={styles.img}/>
        </button>
        </div>
    </div>
</div>
}

export default Card;