import styles from "./Counter.module.css";
import classNames from "classnames";
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const Handleplus = () => {
    setCount(count +1);
  };
  const Handleminus = () => {
    if (count > 0) {
    setCount(count -1);
  }};

  return (
    <div className={classNames(styles.counter)}>
      <button onClick={Handleminus}>
        <IconMinus />
      </button>
      <div>{count}</div>
      <button onClick={Handleplus}>
        <IconPlus />
      </button>
    </div>
  );
}




export default Counter;