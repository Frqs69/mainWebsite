import { Icon } from "@iconify/react";

export default function Portfolio() {
	return (
		<div className='secondSection'>
			<h3>Portfolio</h3>
			<h2>Each project is a unique piece of development 🧩</h2>
			<div className='projectList'>
				<div className='project'>
					<img src='' alt='' />
					<p className='projectTitle'>car rental</p>
					<p className='projectDescription'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox'>
						<p>React</p>
						<p>SCSS</p>
					</div>
					<div className='links'>
						<a href=''>
							<Icon icon='mdi:github' />
						</a>
						<a href=''>
							Live demo <Icon icon='akar-icons:link-out' />
						</a>
					</div>
				</div>
				<div className='project'>
					<img src='' alt='' />
					<p className='projectTitle'>car rental</p>
					<p className='projectDescription'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox'>
						<p>React</p>
						<p>SCSS</p>
					</div>
					<div className='links'>
						<a href=''>
							<Icon icon='mdi:github' />
						</a>
						<a href=''>
							Live demo <Icon icon='akar-icons:link-out' />
						</a>
					</div>
				</div>
				<div className='project'>
					<img src='' alt='' />
					<p className='projectTitle'>car rental</p>
					<p className='projectDescription'>
						A car rental website is an online platform that allows users to rent
						cars for personal or business use. The website provides an interface
						for searching, comparing, and reserving cars.
					</p>
					<div className='techStackBox'>
						<p>React</p>
						<p>SCSS</p>
					</div>
					<div className='links'>
						<a href=''>
							<Icon icon='mdi:github' />
						</a>
						<a href=''>
							Live demo <Icon icon='akar-icons:link-out' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
