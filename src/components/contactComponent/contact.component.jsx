import { Icon } from "@iconify/react";

export default function Contact() {
	return (
		<div className='contactSection'>
			<h3>Contact</h3>
			<h2>Don’t be shy! Hit me up! 👇</h2>
			<div className='contactBoxes'>
				<div className='contactBox'>
					<Icon icon='ooui:map-ltr' />
					<p className='contactBox-title'>Location</p>
					<p className='contactBox-description'>Warsaw, Poland</p>
				</div>
				<div className='contactBox'>
					<Icon icon='ic:outline-mail' />
					<p className='contactBox-title'>Mail</p>
					<p className='contactBox-description'>kbazyluk123@gmail.com</p>
				</div>
			</div>
		</div>
	);
}
