import React from 'react'
import { motion } from 'motion/react';
import Footer from './Footer';
import ContactUsInfo from './ContactUsInfo';
import HeaderContainer from './HeaderContainer';
import { steps } from '../utils';
import SpinningBackground from './SpinningBackground';

const Home: React.FC= () => {
 
	return (
		<div>
			<section className='bg-black flex justify-start items-center pl-20 pr-20 lg:pl-50 lg:pr-50'>
				<motion.div 
					initial={{ opacity: 0 , y : 50}}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }} className='flex flex-col gap-5 p-10'>
					{/* <canvas data-engine="three.js r181" width="1080" height="1000" style={{display: 'block', width: '1080px', height: '1000px', touchAction: 'none'}}></canvas> */}
					<h1 className='text-6xl font-bold text-white mb-20'>Transforming bold ideas into <span className='main-gradient font-Montserrat'>breakthrough solutions</span> </h1>
					<p className='text-white'>	Partner with us to bring your vision to life. We combine strategic thinking with flawless execution,
						delivering end-to-end solutions that drive real impact. From concept to launch and beyond,
						we're your trusted technology partner committed to turning ambitious ideas into market-ready innovations.
					</p>

					<button  className='flex items-center w-70 font-semibold text-2xl font-Montserrat rounded-lg  bg-blue-300 text-white px-6 py-2 hover:text-blue-500'>
						<span>
							Get Started
						</span>
						<span className='group-hover:translate-x-1 transition-transform duration-300 my-auto'>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
						</span>
					</button>
				</motion.div>
			</section>

			{/* <SpinningBackground /> */}
			<section  className='flex justify-center items-center  pl-20 pr-20 lg:pl-50 lg:pr-50'>
				<div className='p-10'>

					<p className='text-7xl'>You dream, we build</p>

					<div className='grid md:grid-cols-1 lg:grid-cols-7 gap-10 mt-5'>
						<div className='h-full w-130 lg:w-full lg:col-span-3'>
							<img className='rounded-2xl' src="https://ocelotgroup.org/_next/static/media/1537.a3a7716b.jpg" alt="" />
						</div>
						<div className='lg:col-span-4' >

							<div>
								<div>
									Ocelot is a compact team of experienced technologists and strategists who specialize
									in bringing bold ideas to life. In simple terms, we solve problems, build dreams, 
									and do it in a timely, efficient, and cost-effective manner. We exist to ensure 
									that great ideas don't die due to poor execution or weak operational structures.
								</div>

								<div className='grid grid-cols-2 gap-5 mt-5'>

									<div className=''>
										<h3 className='font-bold text-3xl'>About Us</h3>
										<p>
											In technology, speed and grit are everything. At Ocelot, we see ourselves as a small,
											agile team building solutions that transform the way businesses operate.
										</p>
										<button className='flex gap-2 items-center text-blue-400'>
											<span>Read More</span>
											<span className='p-2 rounded-[50%] bg-gray-300 '>
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-3.5 w-3.5 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>											
											</span>
										</button>
									</div>
									<div className=''>
										<h3 className='font-bold text-3xl'>Our Services</h3>
										<p>
											From product design & development to business strategy & operational consulting, we provide end-to-end solutions with real-time communication and adaptive iteration
										</p>

										<button className='flex gap-2 items-center text-blue-400'>
											<span>Read More</span>
											<span className='p-2 rounded-[50%] bg-gray-300 '>
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-3.5 w-3.5 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>											
											</span>
										</button>
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>
			</section>


			<section className='bg-black w-full text-white  pl-20 pr-20 lg:pl-50 lg:pr-50 '>
				<div className='p-10'>
					<div className='flex gap-2 items-center'>
						<span>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-white"><circle cx="7" cy="7" r="7" fill="currentColor"></circle></svg>

						</span>
						<span>Our four step approach</span>
					</div>

					<div className='grid md:grid-cols-2 gap-x-5 gap-y-10 mt-10'>

						
							{steps.map(step => (
								<div key={step.id}> 
									<motion.div 
										initial={{ opacity: 0 , y : 50}}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, ease: "easeOut" }} 
									>
										<h4 className="text-[50px] leading-[50px] mb-10">
											<span className="bg-gray-100/10 text-blue-400 rounded-[35%] p-2 font-bold">{step.id}</span>
										</h4>

										<h3 className='font-bold text-2xl'>{step.title}</h3>
									</motion.div>
							
									<motion.p
										initial={{ opacity: 0 , y : 50}}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.7, ease: "easeOut" }} 
										className='text-slate-300'>
											{step.description}
									</motion.p>
								</div>
								
							))}

					

					</div>

					<div className='mt-10 w-[120] lg:w-full'>
						<img className='w-full rounded-2xl' src="https://ocelotgroup.org/_next/static/media/planning.1b97172c.jpg" alt="" />
					</div>


				</div>
			</section>

			<ContactUsInfo />

			<Footer />
		</div>	
			
	)
}

export default Home