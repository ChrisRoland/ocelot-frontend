import React from 'react';
import { motion } from "motion/react";

const ContactUsInfo = () => {
  return (
    <motion.section 
		initial={{ opacity: 0 , y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
	className='flex justify-center items-center font-primary'>
				<div className='flex flex-col gap-4 custom-container p-20'>
					<h1 className="max-w-[400px] font-bold text-[54px] 480:text-[60px] leading-[55px] 768:leading-[115px] 768:text-[130px] text-black font-primary text-center mx-auto" >
							Ready to turn your
						<span className="text-primary-main"> vision </span>
						into reality?
					</h1>

					
					<button className='flex gap-2 items-center contact mt-5  cursor-pointer'>
						<span>Contact Us</span>
						<span className='p-2 rounded-[50%] bg-gray-300 icon-translate'>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-3.5 w-3.5 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>											
						</span>
					</button>

					
				</div>
			</motion.section>
  )
}

export default ContactUsInfo