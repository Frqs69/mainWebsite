import { Icon } from "@iconify/react";

export default function Portfolio() {
	return (
		<div className='secondSection bg-backgroundColor pt-8 pb-16'>
			<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8'>
				Portfolio
			</h3>
			<h2 className='font-bold text-mainTextColor text-center text-2xl px-2 mb-6'>
				Each project is a unique piece of development 🧩
			</h2>
			<div className='projectList px-5'>
				<div className='project bg-white p-5 rounded-xl shadow-3xl mb-10'>
					<img className='rounded-xl' src='/mobileImg1.jpg' alt='' />
					<p className='projectTitle uppercase font-bold text-center my-5'>
						car rental
					</p>
					<p className='projectDescription text-center text-secondTextColor'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox flex gap-3 justify-center my-5'>
						<p className='shadow-3xl px-3 py-2'>React</p>
						<p className='shadow-3xl px-3 py-2'>SCSS</p>
					</div>
					<div className='links flex justify-center gap-6 mt-8'>
						<a href='' className='flex items-center'>
							Code <Icon icon='mdi:github' width='30' className='ml-1' />
						</a>
						<a href='' className='flex items-center'>
							Live demo{" "}
							<Icon icon='akar-icons:link-out' width='20' className='ml-1' />
						</a>
					</div>
				</div>
				<div className='project bg-white p-5 rounded-xl shadow-3xl mb-10'>
					<img className='rounded-xl' src='/mobileImg1.jpg' alt='' />
					<p className='projectTitle uppercase font-bold text-center my-5'>
						car rental
					</p>
					<p className='projectDescription text-center text-secondTextColor'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox flex gap-3 justify-center my-5'>
						<p className='shadow-3xl px-3 py-2'>React</p>
						<p className='shadow-3xl px-3 py-2'>SCSS</p>
					</div>
					<div className='links flex justify-center gap-6 mt-8'>
						<a href='' className='flex items-center'>
							Code <Icon icon='mdi:github' width='30' className='ml-1' />
						</a>
						<a href='' className='flex items-center'>
							Live demo{" "}
							<Icon icon='akar-icons:link-out' width='20' className='ml-1' />
						</a>
					</div>
				</div>
				<div className='project bg-white p-5 rounded-xl shadow-3xl'>
					<img className='rounded-xl' src='/mobileImg1.jpg' alt='' />
					<p className='projectTitle uppercase font-bold text-center my-5'>
						car rental
					</p>
					<p className='projectDescription text-center text-secondTextColor'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox flex gap-3 justify-center my-5'>
						<p className='shadow-3xl px-3 py-2'>React</p>
						<p className='shadow-3xl px-3 py-2'>SCSS</p>
					</div>
					<div className='links flex justify-center gap-6 mt-8'>
						<a href='' className='flex items-center'>
							Code <Icon icon='mdi:github' width='30' className='ml-1' />
						</a>
						<a href='' className='flex items-center'>
							Live demo{" "}
							<Icon icon='akar-icons:link-out' width='20' className='ml-1' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
