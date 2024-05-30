import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { MainLayout } from "./layouts/MainLayout";


export function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/history' element={<History />} />
			</Route>
		</Routes>
	);
}
