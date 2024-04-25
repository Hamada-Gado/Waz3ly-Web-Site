import ReactDOM from "react-dom/client";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);


export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-heading">
        Hello world!
        </h1>
    </div>
  )
}

