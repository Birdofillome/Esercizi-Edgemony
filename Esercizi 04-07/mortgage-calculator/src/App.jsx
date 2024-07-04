import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const [input, setInput] = useState(
    {
    amount: "",
    term: "",
    rate: "",
    type: "repayment",
  }
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const mortgage = e.target.name; 
    setInput ({ ...input, [mortgage]: value });
  };

  return (
    <>
    <div className={styles.container}>
    <div className={styles.calculator}>
    <h1>Mortgage Calculator</h1>
    <button className={styles.clearButton}>Clear All</button>
    <form>
    <label>Mortgage Amount</label>
    <input name="amount" type="number" placeholder='£' onChange={(e) => handleChange(e)}/>
    <label>Mortgage Term</label>
    <input name="term" type="number" placeholder='years' onChange={(e) => handleChange(e)}/>
    <label>Interest Rate</label>
    <input name="rate" type="number" placeholder='%' onChange={(e) => handleChange(e)}/>
    <div className={styles.containerradio}>
    <label>Mortgage Type:</label>
    <label>
    <input
              type="radio"
              name="type"
              value="repayment"
              checked={input.type === "repayment"}
              onChange={(e) => handleChange(e)}
            />
            Repayment
            </label>
            <label>
            <input
              type="radio"
              name="type"
              value= "interest"
              checked={input.type === "interest"}
              onChange={(e) => handleChange(e)}
            />
            Interest Only
            </label>
            </div>
    </form>
    <button className={`${styles.button} ${styles.calculate}`}> <img src="icon-calculator.svg" alt="calculator"/>Calculate Repayments</button>
    </div>
    <div className={styles.results}>
    <h1>Mortgage Amount: {input.amount}</h1>
    <h1>Mortgage Term: {input.term}</h1>
    <h1>Interest Rate: {input.rate}</h1>
    <h1>Type: {input.type}</h1>
    </div>
    </div>
    </>
  )
}

export default App
