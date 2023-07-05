import { Icon } from "@iconify/react";
import "./header.styles.scss";

export default function Header() {
	return (
		<header className='bg-backgroundColor pt-10'>
			<div className='heroImg mx-auto w-64 h-64 '></div>
			<h1 className='font-bold text-4xl text-center my-10 px-12 leading-tight text-mainTextColor'>
				Front-end React Developer
			</h1>
			<p className='text-secondTextColor text-center px-4 mb-10'>
				Hi, I'm Kamil Bazyluk. A passionate Front-end React Developer based in
				Warsaw, Poland. 📍
			</p>
			<div className='linkbox flex justify-center gap-3 mb-10'>
				<a href='#'>
					<Icon icon='mdi:github' width='25' />
				</a>
				<a href='#'>
					<Icon icon='bi:linkedin' width='25' />
				</a>
			</div>

			<div className='techStackBox text-center'>
				<p className='mx-auto border-b-2 w-28 text-center border-black pb-4'>
					Tech Stack
				</p>
				<ul className='mt-10 mb-40 inline-grid grid-cols-3 gap-5'>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon
							icon='vscode-icons:file-type-html'
							className='m-4'
							width='40'
						/>
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='vscode-icons:file-type-css' width='40' />
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon
							icon='vscode-icons:file-type-js-official'
							className='m-4'
							width='40'
						/>
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='devicon:react' className='m-4' width='40' />
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='logos:tailwindcss-icon' width='30' />
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='logos:sass' width='40' />
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='logos:figma' className='m-4' width='20' />
					</li>
					<li className='rounded-[50%] shadow-lg flex justify-center items-center'>
						<Icon icon='skill-icons:photoshop' className='m-4' width='40' />
					</li>
				</ul>
			</div>
		</header>
	);
}
