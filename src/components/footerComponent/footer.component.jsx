import { Icon } from "@iconify/react";

export default function Footer() {
	return (
		<footer>
			<p>Copyright © 2023. All rights are reserved</p>
			<div className='footerBox'>
				<a href=''>
					<Icon icon='bi:linkedin' />
				</a>
				<a href=''>
					<Icon icon='mdi:github' />
				</a>
			</div>
		</footer>
	);
}
