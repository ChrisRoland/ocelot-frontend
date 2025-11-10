import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

	return (
		<div>	
			<section className='flex justify-center items-center bg-black  w-full'>
				<div className="flex flex-col gap-50 "> 
					<nav className='flex justify-between  mt-5'>
						<div>
							<img src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png" alt="" />
						</div>

						<div className='flex justify-between items-center gap-10 mr-10 text-white'>
							<div className='font-semibold  text-2xl font-Montserrat  hover:text-blue-400'>About us</div>
							<div  className='font-semibold text-2xl font-Montserrat  hover:text-blue-500'>Service</div>
							<div  className='font-semibold text-2xl font-Montserrat  hover:text-blue-500'>Projects</div>
							<button  className=' flex items-center font-semibold text-2xl font-Montserrat h-full rounded-lg  bg-blue-300 text-white px-6 py-2 hover:text-blue-500'>
								<span>
									Contact
								</span>
								<span className='group-hover:translate-x-1 transition-transform duration-300 my-auto'>
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
								</span>
							</button>
						</div>
					</nav> 

					<div  className='flex flex-col gap-5 p-10'>
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
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
							</span>
						</button>
					</div>

				</div>
			</section>

			<section  className='flex justify-center items-center'>
				<div className='p-10'>
					<p className='text-7xl'>You dream, we build</p>

					<div className='grid grid-cols-7 gap-10'>
						<div className='h-full col-span-3'>
							<img className='' src="https://ocelotgroup.org/_next/static/media/1537.a3a7716b.jpg" alt="" />
						</div>
						<div className='col-span-4' >

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


			<section className='bg-black w-full text-white'>
				<div className='p-10'>
					<div className='flex gap-2 items-center'>
						<span>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-white"><circle cx="7" cy="7" r="7" fill="currentColor"></circle></svg>

						</span>
						<span>Our four step approach</span>
					</div>

					<div className='grid grid-cols-2 gap-x-5 gap-y-10 mt-10'>
						<div>
							<h4 className="text-[50px] leading-[50px] mb-10">
								<span className="bg-gray-100/10 text-blue-400 rounded-[35%] p-2 font-bold">01</span>
							</h4>

							<h3 className='font-bold text-2xl'>Discovery & Analysis</h3>
							<p className='text-slate-300'>
								We begin by thoroughly understanding your business needs, goals, and challenges. 
								Our team conducts an in-depth analysis to identify opportunities 
								and areas for improvement, ensuring a solid foundation for strategic planning.
							</p>

						</div>
						<div>
							<h4 className="text-[50px] leading-[50px] mb-10">
								<span className="bg-gray-100/10 text-blue-400 rounded-[35%] p-2 font-bold">02</span>
							</h4>

							<h3 className='font-bold text-2xl'>Discovery & Analysis</h3>
							<p className='text-slate-300'>
								We begin by thoroughly understanding your business needs, goals, and challenges. 
								Our team conducts an in-depth analysis to identify opportunities 
								and areas for improvement, ensuring a solid foundation for strategic planning.
							</p>

						</div>
						<div>
							<h4 className="text-[50px] leading-[50px] mb-10">
								<span className="bg-gray-100/10 text-blue-400 rounded-[35%] p-2 font-bold">03</span>
							</h4>

							<h3 className='font-bold text-2xl'>Discovery & Analysis</h3>
							<p className='text-slate-300'>
								We begin by thoroughly understanding your business needs, goals, and challenges. 
								Our team conducts an in-depth analysis to identify opportunities 
								and areas for improvement, ensuring a solid foundation for strategic planning.
							</p>

						</div>
						<div>
							<h4 className="text-[50px] leading-[50px] mb-10">
								<span className="bg-gray-100/10 text-blue-400 rounded-[35%] p-2 font-bold">04</span>
							</h4>

							<h3 className='font-bold text-2xl'>Discovery & Analysis</h3>
							<p className='text-slate-300'>
								We begin by thoroughly understanding your business needs, goals, and challenges. 
								Our team conducts an in-depth analysis to identify opportunities 
								and areas for improvement, ensuring a solid foundation for strategic planning.
							</p>

						</div>

						<div className='col-span-2'>
							<img className='w-full' src="https://ocelotgroup.org/_next/static/media/planning.1b97172c.jpg" alt="" />
						</div>

					</div>

				</div>
			</section>

			<section className='flex justify-center items-center '>
				<div className='flex flex-col gap-4 p-20'>
					<h1 className="text-[50px] leading-[30px] text-black font-primary text-center mx-auto" >
							Ready to turn your
						<span className="text-primary-main"> vision </span>
						into reality?
					</h1>

					
					<button className='flex gap-2 items-center text-blue-400 mx-auto mt-5'>
						<span>Contact Us</span>
						<span className='p-2 rounded-[50%] bg-gray-300 '>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="h-3.5 w-3.5 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>											
						</span>
					</button>

					
				</div>
			</section>

			<section className='flex justify-center items-center gap-3 bg-black text-white '>
				<div>
					<div className='grid grid-cols-3 gap-4 mt-10 mb-20'>
						<div className=''>
							<div>
								<img src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png" alt="" />
							</div>
							<p>
								Transforming bold ideas into breakthrough solutions. We combine strategic thinking with
								flawless execution to turn ambitious visions into market-ready innovations.


							</p>
						</div>

						<div>
							<h3>Quick Links</h3>
							<ul>
								<li>About</li>
								<li>Services</li>
								<li>Projects</li>
								<li>Contact</li>
							</ul>
						</div>
						<div>
							<h3>Quick Links</h3>
							<ul>
								<li>About</li>
								<li>Services</li>
								<li>Projects</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>			

					<p className='text-slate-500 text-center mb-20'>© 2025 Ocelot. All rights reserved.</p>
				</div>
							
			</section>
		</div>
	)
}

export default App
