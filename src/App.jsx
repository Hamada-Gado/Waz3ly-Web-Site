import ReactDOM from "react-dom/client";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);


export default function App() {
	return (
		<div className="bg-background-main h-full">
			<h1 className="text-3xl font-bold font-heading text-text bg-background-dark">
				Hello world!
			</h1>
		</div>
	);
}

