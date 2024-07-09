import styles from "./App.module.css";
import { useState } from "react";

const initialTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Fare 30 minuti di yoga",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Appuntamento dal dentista",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Comprare pane",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Farmacia",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Controllare l'email",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.length) return;

    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (e) => {
    const newList = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newList);
  };

  return (
    <div className={styles.container}>
      <input value={input} placeholder="Input" onChange={handleChange} className={styles.input} />
      <button onClick={addTodo} className={styles.addButton}>ADD</button>
      <div className={styles.container__list}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              {todo.title}
              <button id={todo.id} onClick={handleDelete} className={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
