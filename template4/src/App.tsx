import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharCount from "./components/CharCount";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="charcount" element={<CharCount/>} />
					<Route path="todolist" element={<TodoList/>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
