import { motion } from "motion/react";
import { ThreeJSBackground } from './ThreeJSBackground';

const HeaderContainer = ({title, description, modelPath}: { title: string, description: string, modelPath: string }) => {
	return (
		<section 
			className='bg-black  relative flex justify-center items-center border-none outline-0 custom-container' >
			{/* Three.js Background */}
			<ThreeJSBackground 
				modelPath={modelPath}
			/>
			
			<motion.div 
				initial={{ opacity: 0 , y : 50}}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }} 
				className="absolute left-7 md:left-80 top-70 md:top-30">
				<h2 className='text-white text-[30px] lg:text-[70px] font-bold font-primary'>{title}</h2>
				<div>

					<p className='text-neutral-200 leading-5 font-normal tracking-tight text-[15px] max-w-[400px]'>{description}</p>
				</div>

			</motion.div>
		</section>
	)
}

export default HeaderContainer