import { Icon } from "@iconify/react";
import "./header.styles.scss";

export default function Header() {
	return (
		<header className='bg-backgroundColor pt-10 md:pb-10 '>
			<div className='md:flex md:flex-row-reverse md:w-3/5 md:mx-auto md:mt-20 md:justify-between'>
				<div className='heroImg mx-auto w-64 h-64 md:w-96 md:h-96 md:mx-0'></div>
				<div className='md:w-1/2 '>
					<h1 className='font-bold text-4xl text-center my-10 px-12 leading-tight text-mainTextColor  md:text-left md:px-0 md:text-6xl'>
						Front-end React Developer
					</h1>
					<p className='text-secondTextColor text-center px-4 mb-10  md:text-left md:px-0 md:text-lg md:w-4/5'>
						Hi, I'm Kamil Bazyluk. A passionate Front-end React Developer based
						in Warsaw, Poland. 📍
					</p>
					<div className='linkbox flex justify-center gap-3 mb-10 md:justify-normal'>
						<a href='#'>
							<Icon icon='mdi:github' width='25' />
						</a>
						<a href='#'>
							<Icon icon='bi:linkedin' width='25' />
						</a>
					</div>
				</div>
			</div>

			<div className='techStackBox text-center md:flex md:text-left  md:w-max md:mt-20 md:pl-96 md:items-center '>
				<p className='mx-auto border-b-2 w-28 text-center border-x-zinc-200 pb-4 md:text-left md:mx-0 md:border-r-2 md:border-b-0 md:pt-4'>
					Tech Stack
				</p>
				<ul className='mt-10 mb-40 inline-grid grid-cols-3 gap-5 md:flex md:mt-0 md:mb-0 md:ml-10 md:gap-7'>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon
							icon='vscode-icons:file-type-html'
							className='m-4 md:m-0'
							width='30'
						/>
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon icon='vscode-icons:file-type-css' width='30' />
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon
							icon='vscode-icons:file-type-js-official'
							className='m-4 md:m-0'
							width='30'
						/>
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon icon='devicon:react' className='m-4 md:m-0' width='30' />
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon icon='logos:tailwindcss-icon' width='30' />
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon icon='logos:sass' width='30' />
					</li>
					<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
						<Icon
							icon='skill-icons:photoshop'
							className='m-4 md:m-0'
							width='30'
						/>
					</li>
				</ul>
			</div>
			<div className='md:mb-80'></div>
		</header>
	);
}
