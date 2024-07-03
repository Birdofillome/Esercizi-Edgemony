import { useState } from "react";
import styles from "./app.module.css"

function App() {
const [input, setInput] = useState(
  {
  name: "",
  lastName: "",
  emailAddress: "",
  queryType: "General Enquiry",
  message: "",
}
);

const handleChange = (e) => {
  const value = e.target.value;
  const name = e.target.name; 
  setInput ({ ...input, [name]: value });
};

  return (
    <>
    <div className={styles.formContainer}>
    <form>
    <h1>Contact Us</h1>
    <label>First Name *</label>
    <input name="name" type="text"  onChange={(e) => handleChange(e)}/>
    <label>Last Name *</label>
    <input name="lastName" type="text"  onChange={(e) => handleChange(e)}/>
    <label>Email Address *</label>
    <input name="emailAddress" type="email"  onChange={(e) => handleChange(e)}/>
    <label>Query Type *</label>
        <div className={styles.radioGroup}>
          <div className={styles.general}>
          <label>
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              checked={input.queryType === "General Enquiry"}
              onChange={(e) => handleChange(e)}
            />
            General Enquiry
          </label>
          </div>
          <div className={styles.support}>
          <label>
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              checked={input.queryType === "Support Request"}
              onChange={(e) => handleChange(e)}
            />
            Support Request
            </label>
            </div>
            </div>
    <label>Message *</label>
    <input className={styles.message} name="message" type="text" onChange={(e) => handleChange(e)}/>
    <div className={styles.checkbox}>
    <input className="termini" type="checkbox"/>
    <label> I consent to being contacted by the team </label>
    </div>
    <button>Submit</button>
    </form>

    <h1>{input.name}</h1>
    <h1>{input.lastName}</h1>
    <h1>{input.emailAddress}</h1>
    <h1>{input.message}</h1>
    </div>
    </>
  );
}

export default App
