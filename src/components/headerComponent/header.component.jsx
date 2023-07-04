import { Icon } from "@iconify/react";

export default function Header() {
	return (
		<header>
			<p>zdjęcie</p>
			<h1>Front-end React Developer</h1>
			<p>
				Hi, I'm Kamil Bazyluk. A passionate Front-end React Developer based in
				Warsaw, Poland. 📍
			</p>
			<div className='linkbox'>
				<a href='#'>
					<Icon icon='mdi:github' />
				</a>
				<a href='#'>
					<Icon icon='bi:linkedin' />
				</a>
			</div>

			<div className='techStackBox'>
				<p>Tech Stack |</p>
				<ul>
					<li>
						<Icon icon='vscode-icons:file-type-html' />
					</li>
					<li>
						<Icon icon='vscode-icons:file-type-css' />
					</li>
					<li>
						<Icon icon='vscode-icons:file-type-js-official' />
					</li>
					<li>
						<Icon icon='devicon:react' />
					</li>
					<li>
						<Icon icon='logos:tailwindcss-icon' />
					</li>
					<li>
						<Icon icon='logos:sass' />
					</li>
					<li>
						<Icon icon='logos:figma' />
					</li>
					<li>
						<Icon icon='skill-icons:photoshop' />
					</li>
				</ul>
			</div>
		</header>
	);
}
