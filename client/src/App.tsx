import { ComponentType, ReactElement } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
	let Component: ComponentType = Home;
	switch (window.location.pathname) {
		case "/":
			Component = Home;
			break;
		case "/pricing":
			Component = Pricing;
			break;
		case "/about":
			Component = About;
			break;
		default:
			break;
	}
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<Component />
			</div>
		</div>
	);
}

export default App;
