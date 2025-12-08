import { motion } from "motion/react";
import { ThreeJSBackground } from './ThreeJSBackground';

const HeaderContainer = ({title, description, modelPath}: { title: string, description: string, modelPath: string }) => {
	return (
		<section 
<<<<<<< HEAD
			className='bg-black relative flex justify-center items-center border-none outline-0 custom-container overflow-hidden' >
			{/* Three.js Background */}
			<ThreeJSBackground />
=======
			className='bg-black  relative flex justify-center items-center border-none outline-0 custom-container' >
			{/* Three.js Background */}
			<ThreeJSBackground 
				modelPath={modelPath}
			/>
>>>>>>> 4de3396dc0a92781d97eacea7869a1786ad93856
			
			<motion.div 
				initial={{ opacity: 0 , y : 50}}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }} 
<<<<<<< HEAD
				className="mt-20 mb-40 w-full relative z-10">
=======
				className="absolute left-7 md:left-80 top-70 md:top-30">
>>>>>>> 4de3396dc0a92781d97eacea7869a1786ad93856
				<h2 className='text-white text-[30px] lg:text-[70px] font-bold font-primary'>{title}</h2>
				<div>

					<p className='text-neutral-200 leading-5 font-normal tracking-tight text-[15px] max-w-[400px]'>{description}</p>
				</div>

			</motion.div>
		</section>
	)
}

export default HeaderContainer