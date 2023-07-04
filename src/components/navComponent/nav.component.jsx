import { Icon } from "@iconify/react";

export default function Nav() {
	return (
		<>
			<nav className='Mobile'>
				<p>Kamil.dev</p>
				<Icon icon='iconamoon:menu-burger-horizontal' />
			</nav>
			<nav className='Desktop'>
				<p>Kamil.deb</p>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Project</li>
					<li>Contact</li>
				</ul>
			</nav>
		</>
	);
}
