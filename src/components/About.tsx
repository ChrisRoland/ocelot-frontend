import React from 'react'
import HeaderContainer from './HeaderContainer'
import ContactUsInfo from './ContactUsInfo'
import Footer from './Footer'
import { approaches, teams } from '../utils'

const About: React.FC = () => {
  return (
    <div className='relative'>
        <HeaderContainer 
                title="About Us"
                description="Ocelot is a compact team of experienced technologists and strategists who specialize in bringing bold ideas to life. We solve problems, build dreams, and help small businesses with little capital execute their ideas to compete in a thriving market."
                modelPath="/models/Parrot.glb"
            />

        <div className='absolute top-160 md:top-140'>

            <div className='flex justify-center items-center custom-container'>
                <div>
                    <section>
                        <h1 className="text-left mt-7 font-primary font-extrabold  text-black text-[38px] 480:text-[60px] 640:text-[91px] leading-[50px] 480:leading-[64px] 640:leading-[95px] w-3/4 opacity-100 transform-none">Our approach</h1>

                        <div className='grid md:grid-cols-3 gap-5 mt-7'>
                            {
                                approaches.map((elem, index) => (
                                    <div key={index}>
                                        <h2 className='text-[20px] font-primary custom-bold-font'>{elem.title}</h2>
                                        <p className='mt-3 text-neutral-600 font-medium md:text-[11px]'>
                                            {elem.description}
                                        </p>
                                    </div>

                                ))
                            }    
                            
                        </div>
                    </section> 

                    <section className='font-primary'>
                        <div className='mt-20'>
                            <h1 className='text-[35px] font-bold md:text-[70px] md:font-medium opacity-90'>Meet The Team</h1>
                            <div className='grid md:grid-cols-3 gap-10 md:gap-3'>
                                {
                                    teams.map((elem, index) => (
                                        <div key={index} className='flex flex-col gap-2 w-full'>
                                            <div className='w-50 h-50'>
                                                <img alt="market_image" fetch-priority="high" decoding="async" data-nimg="1" className="object-fit rounded-2xl bg-neutral-100 w-full h-full 960:max-h-[350px]" src={elem.image_url} style={{color: "transparent"}} />

                                            </div>

                                            {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                            <div className='font-black'>{elem.staff_name}</div>
                                            <div className='font-bold text-neutral-600 text-[13px]'>{elem.title}</div>
                                            <p className='text-neutral-600 text-[10px]'>{elem.description}</p>
                                        </div>

                                    ))
                                }
                                
                                
                                
            
                                

                            </div>
                        </div>
                    </section>

                    
                </div>
                
            </div>

            <ContactUsInfo />
            <Footer />
        </div>
    </div>
  )
}

export default About