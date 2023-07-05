import { Icon } from "@iconify/react";

export default function AboutMe() {
	return (
		<div className='aboutMeSection pt-20'>
			<img
				src='/mobileImg1.jpg'
				alt='RandomImg'
				className='rounded-[15px] w-3/4 mx-auto'
			/>
			<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8'>
				About me
			</h3>
			<h2 className='font-bold text-mainTextColor text-center text-2xl px-2 mb-6'>
				A dedicated Front-end Developer based in Warsaw, Poland 📍
			</h2>
			<p className='text-secondTextColor text-center px-12 text-sm mb-16'>
				As a Junior Front-End Developer, I possess an impressive arsenal of
				skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
				designing and maintaining responsive websites that offer a smooth user
				experience. My expertise lies in crafting dynamic, engaging interfaces
				through writing clean and optimized code and utilizing cutting-edge
				development tools and techniques. I am also a team player who thrives in
				collaborating with cross-functional teams to produce outstanding web
				applications.
			</p>
		</div>
	);
}
