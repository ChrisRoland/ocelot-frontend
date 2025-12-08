import { motion } from 'motion/react';

const Footer = () => {
  return (
   <section className='flex justify-center items-center gap-3 bg-black text-white custom-container '>
		<motion.div 
			initial={{ opacity: 0 , y: 50}}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}	
			className='flex justify-center items-center '>
				<div>
						<div className='grid lg:grid-cols-3 gap-5 mt-10 mb-20'>
							<div className=''>
								<div className='mb-2'>
									<img className='h-7' src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png" alt="" />
								</div>
								<p className='text-neutral-400 text-[13px] text-normal'>
									Transforming bold ideas into breakthrough solutions. We combine strategic thinking with
									flawless execution to turn ambitious visions into market-ready innovations.


								</p>
							</div>

							<div>
								<h3 className='md:text-center font-primary font-extrabold'>Quick Links</h3>
								<div className='text-slate-300 flex items-center md:justify-center'>
									<ul className='flex flex-col gap-3 mt-2'>
										<li>About</li>
										<li>Services</li>
										<li>Projects</li>
										<li>Contact</li>
									</ul>
									
								</div>
							</div>
							<div className='md:text-end font-primary mt-10'>
								<h3 className=' font-extrabold'>Get In Touch</h3>
								<p className='text-neutral-500 text-[12px]'>Email</p>
								<p className='text-sm'>marketingocelot@gmail.com</p>
								<p className='text-neutral-500 text-[12px]'>Phone</p>
								<p className='text-sm'>+234 802 810 8892</p>
							</div>
						</div>

						<p className='text-slate-500 text-center mb-20'>© 2025 Ocelot. All rights reserved.</p>
					</div>			

				</motion.div>
				

						
			</section>
  )
}

export default Footer