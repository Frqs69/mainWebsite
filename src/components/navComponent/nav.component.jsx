import { Icon } from "@iconify/react";

export default function Nav() {
	return (
		<>
			<nav className='Mobile flex items-center justify-between px-5 shadow-lg sticky top-0 bg-white z-10 md:hidden'>
				<img src='/logo-black.svg' alt='' className='w-24' />
				<Icon icon='iconamoon:menu-burger-horizontal' width='40px' />
			</nav>
			<nav className='Desktop hidden md:block shadow-lg sticky top-0 bg-white z-10'>
				<div className='flex justify-between w-4/5 mx-auto  sticky top-0'>
					<p>
						<img src='/logo-black.svg' alt='' className='w-24' />
					</p>
					<ul className='flex items-center gap-10 font-bold text-mainTextColor'>
						<li>Home</li>
						<li>About</li>
						<li>Project</li>
						<li>Contact</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
