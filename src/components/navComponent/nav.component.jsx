import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Nav() {
	const [openMenu, setOpenMenu] = useState(false);

	const onClick = () => {
		setOpenMenu(!openMenu);
		console.log("test");
	};

	return (
		<>
			<nav className='Mobile flex items-center justify-between px-5 shadow-lg sticky top-0 bg-white z-10   md:hidden'>
				<img src='/logo-black.svg' alt='' className='w-24' />
				<div className=''>
					<Icon
						icon='iconamoon:menu-burger-horizontal'
						width='40px'
						onClick={onClick}
					/>
					<ul
						className={` gap-16 font-bold flex flex-col items-center justify-center  text-mainTextColor text-3xl absolute w-screen  h-screen top-0 left-0 bg-white  transition-transform duration-700  ${
							openMenu ? "translate-x-0" : "translate-x-full "
						}`}>
						<Icon
							icon='gg:close'
							width='40px'
							className='absolute top-7 right-5'
							onClick={onClick}
						/>
						<li onClick={onClick}>
							<a href='#'>Home</a>{" "}
						</li>
						<li onClick={onClick}>
							<a href='#aboutMe'>About</a>
						</li>
						<li onClick={onClick}>
							<a href='#portfolio'>Project</a>
						</li>
						<li onClick={onClick}>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav className='Desktop hidden md:block shadow-lg sticky top-0 bg-white z-10'>
				<div className='flex justify-between w-3/5 mx-auto  sticky top-0'>
					<p>
						<img src='/logo-black.svg' alt='' className='w-24' />
					</p>
					<ul className='flex items-center gap-10 font-bold text-mainTextColor text-xl'>
						<li>
							<a href='#'>Home</a>{" "}
						</li>
						<li>
							<a href='#aboutMe'>About</a>
						</li>
						<li>
							<a href='#portfolio'>Project</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
