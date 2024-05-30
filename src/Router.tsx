import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { History } from "./pages/History";

export function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/history' element={<History />} />
		</Routes>
	);
}
