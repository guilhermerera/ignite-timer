import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer } from "./styles";

import LogoMinimal from "../../assets/logo_minimal.png";

export function Header() {
	return (
		<HeaderContainer>
			<img src={LogoMinimal} alt='' />
			<nav>
				<NavLink to='/' title='Timer'>
					<Timer size={24} />
				</NavLink>
				<NavLink to='history' title='History'>
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
