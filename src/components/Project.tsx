import React from 'react'
import HeaderContainer from './HeaderContainer'
import Footer from './Footer';
import { motion } from 'motion/react';
import ProjectSection from './portfolioSection/ProjectSection'

const Project = () => {
  return (
    <div className='relative'>
        <HeaderContainer 
            title="Our Projects"
            description="Explore our portfolio of innovative solutions and breakthrough technologies.
                From fintech platforms to e-commerce applications,
                discover how we transform bold ideas into market-ready innovations."			
			modelPath="/models/Horse.glb"
        />

		<div className='absolute top-160 md:top-140'>
			{/* <ProjectSection /> */}


				
				<div className="relative mt-20 custom-container justify-center items-center">
					<div>
						{/* ------------- BLOCK 1 ------------- */}
						<div
							className="
							max-h-[480px] overflow-y-hidden pl-9 640:pl-14 mb-10 
							rounded-3xl sticky top-24 w-full bg-black 
							bg-[url('https://ocelotgroup.org/assets/stock_bg.png')] bg-positon-[center_top] z-0
							"
						>
							<div className="flex flex-col md:flex-row justify-between">

								{/* LEFT SIDE */}
								<div className="flex flex-col justify-between py-12">
									<img
									alt="ocelot_prompt"
									fetchPriority="high"
									width="471"
									height="146"
									decoding="async"
									className="max-h-[50px] w-auto object-contain object-left"
									src="https://ocelotgroup.org/_next/static/media/playrivalz_logo.c8da9c56.png"
									/>

									<div className="mb-16 opacity-100 translate-y-0">
										<div className="">
											<h4 className="text-white opacity-100 translate-y-0">PlayRivalz</h4>
										</div>

									<p className="768:max-w-[250px] opacity-100 font-secondary text-neutral-500 font-medium text-white">
										Bring you closer with friends through gamification
									</p>
									</div>
								</div>

								{/* RIGHT SIDE */}
								<div className="relative 768:pt-12">
									<img
									alt="ocelot_prompt"
									width="591"
									height="1280"
									decoding="async"
									className="
										w-full object-cover max-w-[240px] rounded-[12px]
										-ml-2
									"
									src="https://ocelotgroup.org/_next/static/media/playrivalz_image.f5bbb2dc.jpeg"
									/>

									<div className="absolute top-38 md:top-90  left-5  bottom-10 right-16 animate-float">
									<a
										target="_blank"
										href="https://playrivalz.com/"
										className="flex justify-between  px-3 btn-blue rounded-lg text-white group h-10 gap-2  shadow-sm min-w-[165px]"
									>
										<span><span className="h-full text-sm y-center">View Project</span></span>

										<span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="h-5 w-5">
											<path
											d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											/>
										</svg>
										</span>
									</a>
									</div>
								</div>

							</div>
						</div>

						{/* ------------- BLOCK 2 ------------- */}
						<div
							className="
								shadow-sm shadow-blue-300 h-[480px] overflow-y-hidden
								md:pl-16 mb-10 rounded-3xl  sticky w-full
								bg-[#f7f7f7] z-2 top-[200px]
							"
						>
							<div className="flex flex-col md:flex-row justify-between items-center relative">
	
								<div className="flex flex-col justify-between py-12">
									<img
										alt="ocelot_prompt"
										width="964"
										height="274"
										className="max-h-[50px] w-auto object-contain object-left"
										src="https://ocelotgroup.org/_next/static/media/arena-logo.3fb74a13.jpeg"
									/>

									<div className="768:mb-10 translate-y-[10px]">
										<div className="hidden 768:block">
											<h4 className="text-black translate-y-[10px]">Arena</h4>
									</div>

									<p className="text-black 768:max-w-[250px] font-secondary text-neutral-500 font-medium">
										Start playing and winning
									</p>
									</div>
								</div>

								<div className="relative 768:pt-12">
									<div>
										<img
										alt="ocelot_prompt"
										width="591"
										height="1280"
										className="
											w-full object-cover max-w-[220px] rounded-[12px]
											-ml-14
										"
									src="https://ocelotgroup.org/_next/static/media/arena_image.42445be3.jpeg"
									/>

									<div className="absolute top-40 md:top-90  left-[-10]  bottom-10 right-16 animate-float">
										<a
											target="_blank"
											href="https://playrivalz.com/"
											className="flex justify-between  px-3 btn-blue rounded-lg text-white group h-10 gap-2  shadow-sm min-w-[165px]"
										>
											<span><span className="h-full text-sm y-center">View Project</span></span>

											<span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="h-5 w-5">
												<path
												d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												/>
											</svg>
											</span>
										</a>
									</div>
									</div>
									
								</div>

							</div>
						</div>

						{/* ------------- BLOCK 3 ------------- */}
						<div
							className="
							h-480px overflow-y-hidden px-9 640:px-14 mb-10 rounded-3xl 
							sticky w-full
							bg-[linear-gradient(160.32deg,#fff5e6_40%,#f1ebf4_80%)] bg-[center_top]
							top-[300px] z-4
							"
						>
							<div className="flex flex-col md:flex-row justify-between 1024:gap-1 relative opacity-100">

								<div className="flex flex-col  justify-between py-12">
									<img
									alt="ocelot_prompt"
									width="428"
									height="84"
									className="max-h-[50px] w-auto object-contain object-left"
									src="https://ocelotgroup.org/_next/static/media/airpeace_logo.8f3a676a.png"
									/>

									<div className="768:mb-16 opacity-0 translate-y-[10px]">
									<div className="hidden 768:block">
										<h4 className="translate-y-[10px]">AirPeace</h4>
									</div>

									<p className="768:max-w-[250px] font-secondary text-neutral-500 font-medium">
										Book a flight
									</p>
									</div>
								</div>

								<div className="relative 768:pt-12">
									<img
									alt="ocelot_prompt"
									width="591"
									height="1280"
									className="w-full object-cover max-w-[230px] rounded-[12px] -ml-4"
									src="https://ocelotgroup.org/_next/static/media/airpeace_image.b112caf2.jpeg"
									/>

									

									<div className="absolute top-40 md:top-90  left-[-10]  bottom-10 right-16 animate-float">
										<a
											target="_blank"
											href="https://flyairpeace.com/"
											className="flex justify-between  px-3 btn-blue rounded-lg text-white group h-10 gap-2  shadow-sm min-w-[165px]"
										>
											<span><span className="h-full text-sm y-center">View Project</span></span>

											<span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="h-5 w-5">
												<path
												d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												/>
											</svg>
											</span>
										</a>
									</div>
								</div>

							</div>
						</div>

						{/* ------------- BLOCK 4 ------------- */}
						<div
							className="
							h-[480px] overflow-y-hidden pl-9 md:pl-14 mb-10 rounded-3xl 
							sticky w-full bg-[#438EF2]
							bg-[url('https://ocelotgroup.org/assets/st-cover.png')] bg-position[center_top]
							top-[350px] z-8
							"
						>
							<div className="grid grid-cols-2 lg:flex justify-between gap-8 1024:gap-1 relative opacity-100 translate-y-[10px]">

							<div className="flex flex-col justify-between py-12">
								<img
								alt="ocelot_prompt"
								width="2525"
								height="904"
								className="max-h-[50px] w-auto object-contain object-left"
								src="https://ocelotgroup.org/_next/static/media/sml_logo.4ec93a08.png"
								/>

								<div className="md:mb-16 opacity-0 translate-y-[10px]">
									<div className="md:block">
										<h4 className="text-white opacity-100 translate-y-[10px]">Somalens</h4>
									</div>
									<motion.div 
										initial={{ opacity: 0 , y : 50}}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1.5, ease: "easeOut" }} >	
										<p className=":max-w-[250px] font-secondary text-neutral-500 font-medium">
											Your AI Health Assistant for Personal Wellness
										</p>
										
									</motion.div>
								</div>
							</div>

							<div className="relative md:pt-12">
								<img
								alt="ocelot_prompt"
								width="591"
								height="1280"
								className="w-full object-cover max-w-[230px] rounded-[12px] -ml-2"
								src="https://ocelotgroup.org/_next/static/media/sml_image.0fd0e6c4.jpeg"
								/>

								<div className="absolute top-43 md:top-90  right-0 bottom-10 animate-float">
										<a
											target="_blank"
											href="https://somalens.com/"
											className="flex justify-between  px-3 btn-blue rounded-lg text-white group h-10 gap-2  shadow-sm min-w-[165px]"
										>
											<span><span className="h-full text-sm y-center">View Project</span></span>

											<span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="h-5 w-5">
												<path
												d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												/>
											</svg>
											</span>
										</a>
									</div>
							</div>

							</div>
						</div>

						{/* ------------- BLOCK 5 ------------- */}
						
						<div
							className="
							h-[480px] overflow-y-hidden pl-9 640:pl-14 mb-10 rounded-3xl  
							sticky w-full bg-position-[center_top]
							top-[500px] z-9
							"
							style={{backgroundColor : "rgb(3 12 73 / var(--tw-bg-opacity, 1)) !important"}}
						>
							<div className="grid md:grid-cols-2 1024:flex justify-between gap-8 1024:gap-1 relative  translate-y-[10px]">

							<div className="flex flex-col justify-between py-12">
								<img
								alt="ocelot_prompt"
								width="649"
								height="759"
								className="max-h-[50px] w-auto object-contain object-left"
								src="https://ocelotgroup.org/_next/static/media/medmage_logo.df6d2562.png"
								/>

								<div className="translate-y-[10px]">
									<div className=" 768:block">
										<h4 className="text-white ">Medmage</h4>
									</div>

									<p className="768:max-w-[250px] font-secondary text-neutral-500 font-medium">
										Revolutionize Your Hospital Operations with Medmage
									</p>
								</div>
							</div>

							<div className="relative md:pt-12">
								<img
								alt="ocelot_prompt"
								width="3354"
								height="1842"
								className="w-full max-w-[500px] rounded-[12px] -ml-5 mb-10"
								src="https://ocelotgroup.org/_next/static/media/medmage_image.a7261347.png"
								/>

								<div className="absolute  top-20  md:top-90  right-5 animate-float">
									<a
										target="_blank"
										href="https://app.medmage.org"
										className="flex justify-between items-center btn-blue  px-3 btn-blue rounded-lg text-white group h-10 gap-2  shadow-sm min-w-[165px]"
									>
										<span><span className="text-sm  translate-y-[-5] block">View Project</span></span>
										<span className=" translate-y-[5] transition-transform duration-300 my-auto">
											<svg width="18" height="18" className="h-5 w-5" fill="none">
												<path
												d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												/>
											</svg>
										</span>
									</a>

									
								</div>

							</div>
						</div>

					</div>
				</div>

			</div>



			<Footer />
		</div>
    </div>
  )
}

export default Project