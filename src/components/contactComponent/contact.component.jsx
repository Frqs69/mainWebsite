import { Icon } from "@iconify/react";

export default function Contact() {
	return (
		<div className='contactSection pt-8'>
			<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8'>
				Contact
			</h3>
			<h2 className='font-bold text-mainTextColor text-center text-2xl px-5 mb-6'>
				Don’t be shy! Hit me up! 👇
			</h2>
			<div className='contactBoxes text-center mt-14 mb-16'>
				<div className='contactBox  mb-10'>
					<div className='rounded-[50%] shadow-3xl flex justify-center items-center w-14 h-14 mx-auto mb-3'>
						<Icon icon='ooui:map-ltr' width='25' color='#147EFB' />
					</div>
					<p className='contactBox-title font-bold text-mainTextColor'>
						Location
					</p>
					<p className='contactBox-description text-sm text-secondTextColor'>
						Warsaw, Poland
					</p>
				</div>
				<div className='contactBox'>
					<div className='rounded-[50%] shadow-3xl flex justify-center items-center w-14 h-14 mx-auto  mb-3'>
						<Icon icon='ic:outline-mail' width='25' color='#147EFB' />
					</div>
					<p className='contactBox-title font-bold text-mainTextColor'>Mail</p>
					<p className='contactBox-description text-sm text-secondTextColor'>
						kbazyluk123@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}
