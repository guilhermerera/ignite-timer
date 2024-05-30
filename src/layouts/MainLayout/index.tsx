import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";

export function MainLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
		</LayoutContainer>
	);
}
