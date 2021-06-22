import "./styles.css";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function App() {
  let [input, setInput] = useState(null);

  return (
    <div className="App">
      {input ? <QRCode value={input} /> : <p>Start Typing</p>}
      <br />
      <input onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
