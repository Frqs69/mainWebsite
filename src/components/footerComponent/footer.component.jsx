import { Icon } from "@iconify/react";

export default function Footer() {
	return (
		<footer className='bg-mainTextColor text-white font-bold p-10 text-center'>
			<p className='mb-5'>Copyright © 2023. All rights are reserved</p>
			<div className='footerBox flex gap-4 justify-center items-center'>
				<a href=''>
					<Icon icon='bi:linkedin' width='20' />
				</a>
				<a href=''>
					<Icon icon='mdi:github' width='20' />
				</a>
			</div>
		</footer>
	);
}
