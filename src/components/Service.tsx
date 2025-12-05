import React from 'react'
import HeaderContainer from './HeaderContainer'
import ContactUsInfo from './ContactUsInfo';
import Footer from './Footer';
// import { advantages } from '../utils';

const Service: React.FC = () => {
  return (
    <div>
        <HeaderContainer
            title='Our Services'
            description='Product design & development (end-to-end), full-stack engineering with a balance of quality vs. speed, business strategy & operational consulting, real-time communication & adaptive iteration, and post-launch product support. Experience across fintech, health, advertising, logistics, on-demand services, and real estate.'
        />

        <section className='custom-container'>
            <h1 className='font-primary font-extrabold text-[25px] w-40 md:w-full mt-10'>The Ocelot advantage</h1>
            <div className='grid md:grid-cols-3 gap-2 md:gap-5 mb-10'>
                {/* {
                    advantages.map((elem, index) => (
                        <div key={index} className="bg-neutral-100/90 p-8 rounded-2xl relative">
                           <div>{elem.svg}</div>
                            <h4 className="text-black mt-14 768:mt-16">{elem.title}</h4>
                            <p className="font-secondary mt-3 text-neutral-600 font-medium 768:text-[18px] 768:w-11/12">
                                {elem.description}
                            </p>
                        </div>
                    ))
                } */}

                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 14.25H42.75C45.7013 14.25 48.0938 16.6425 48.0938 19.5938V37.4062C48.0938 40.3575 45.7013 42.75 42.75 42.75H14.25C11.2987 42.75 8.90625 40.3575 8.90625 37.4062V19.5938C8.90625 16.6425 11.2987 14.25 14.25 14.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5938 25.3125H37.4062M19.5938 31.6875H28.5M34.1797 28.5L37.4062 31.7266L34.1797 35.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="21.375" cy="21.375" r="1.78125" fill="black"></circle><circle cx="26.625" cy="21.375" r="1.78125" fill="black"></circle><circle cx="31.875" cy="21.375" r="1.78125" fill="black"></circle></svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 768:mt-16">Product Design &amp; Development</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">
                        End-to-end product design and development services, from concept to launch, ensuring your vision becomes reality.'
    
                    </p>
                </div>

                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                        <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3672 17.8125L23.4922 23.1562L16.3672 28.5M27.0547 28.5H34.1797M12.8047 48.0938H44.8672C47.8185 48.0938 50.2109 45.7013 50.2109 42.75V14.25C50.2109 11.2987 47.8185 8.90625 44.8672 8.90625H12.8047C9.85342 8.90625 7.46094 11.2987 7.46094 14.25V42.75C7.46094 45.7013 9.85342 48.0938 12.8047 48.0938Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 md:mt-16">Full-Stack Engineering</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">Quality-focused engineering with the speed to market. We balance technical excellence with rapid delivery to meet your business goals.</p>
                </div>
                
                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                        <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 28.5H42.75M25.3125 19.5938L19.5938 28.5L25.3125 37.4062M32.0625 37.4062L37.7812 28.5L32.0625 19.5938" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="14.25" cy="14.25" r="8.90625" stroke="black" stroke-width="1.5" fill="none"></circle><circle cx="42.75" cy="42.75" r="8.90625" stroke="black" stroke-width="1.5" fill="none"></circle><circle cx="42.75" cy="14.25" r="8.90625" stroke="black" stroke-width="1.5" fill="none"></circle><path d="M21.375 21.375L28.5 28.5M28.5 28.5L35.625 35.625M28.5 28.5L35.625 21.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 md:mt-16">Business Strategy</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">Operational consulting and strategic planning to help your business execute efficiently and scale effectively.</p>
                </div>

                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5 8.90625V14.25M28.5 42.75V48.0938M8.90625 28.5H14.25M42.75 28.5H48.0938" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="28.5" cy="28.5" r="12.6562" stroke="black" stroke-width="1.5" fill="none"></circle><circle cx="28.5" cy="28.5" r="6.32812" stroke="black" stroke-width="1.5" fill="none"></circle><path d="M19.5938 19.5938L23.8281 23.8281M33.1719 33.1719L37.4062 37.4062M37.4062 19.5938L33.1719 23.8281M23.8281 33.1719L19.5938 37.4062" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="28.5" cy="28.5" r="2.84375" fill="black"></circle>
                        </svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 md:mt-16">Agile Execution</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">On time, on budget delivery with real-time communication and adaptive iteration throughout the development process. </p>
                </div>

                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.90625" y="12.6562" width="39.1875" height="5.34375" rx="2.67188" stroke="black" stroke-width="1.5"></rect><rect x="8.90625" y="21.375" width="39.1875" height="5.34375" rx="2.67188" stroke="black" stroke-width="1.5"></rect><rect x="8.90625" y="30.0938" width="39.1875" height="5.34375" rx="2.67188" stroke="black" stroke-width="1.5"></rect><rect x="8.90625" y="38.8125" width="39.1875" height="5.34375" rx="2.67188" stroke="black" stroke-width="1.5"></rect><circle cx="14.25" cy="15.3281" r="1.78125" fill="black"></circle><circle cx="19.5938" cy="15.3281" r="1.78125" fill="black"></circle><circle cx="24.9375" cy="15.3281" r="1.78125" fill="black"></circle><path d="M32.0625 15.3281H42.75M32.0625 24.0469H37.4062M32.0625 32.7656H39.5469M32.0625 41.4844H35.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 md:mt-16">Industry Expertise</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">
                        Experience across fintech, health, advertising, logistics, on-demand services, and real estate in West Africa & North America.
                    </p>
                    </div>
                <div className='bg-neutral-100 p-8 rounded-2xl relative'>
                    <span className='absolute -ml-2 animate-float_x'>
                       <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8206 26.4102C2.70562 27.1939 2.70562 43.3677 13.8206 44.1514H18.3807" stroke="#1C1C1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9382 26.4098C6.31444 5.20103 38.4718 -3.2777 42.1531 18.9998C52.4368 20.306 56.5932 34.0098 48.8032 40.8261C46.4282 42.9873 43.3644 44.1748 40.1581 44.151H39.9443" stroke="#1C1C1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41.0391 39.2588C41.0391 41.0163 40.659 42.6788 39.9465 44.1513C39.7565 44.5788 39.5429 44.9826 39.3054 45.3626C37.2629 48.8063 33.4866 51.1338 29.1641 51.1338C24.8416 51.1338 21.0653 48.8063 19.0228 45.3626C18.7853 44.9826 18.5716 44.5788 18.3816 44.1513C17.6691 42.6788 17.2891 41.0163 17.2891 39.2588C17.2891 32.7038 22.6091 27.3838 29.1641 27.3838C35.7191 27.3838 41.0391 32.7038 41.0391 39.2588Z" stroke="#1C1C1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.4609 39.2591L27.8122 41.6104L32.8709 36.9316" stroke="#1C1C1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <h4 className="text-black font-bold mt-14 md:mt-16">Post-Launch Support</h4>
                    <p className="font-secondary mt-3 text-neutral-600 font-medium md:text-[13px] md:w-11/12">
                        Continued product support after launch to ensure stability, growth, and ongoing success of your solution.
                    </p>    
                </div> 
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                <div className="w-full max-h-[300px]" >
                    <img alt="market_image" fetchpriority="high"  decoding="async" data-nimg="1" className="object-cover w-full h-full rounded-2xl bg-neutral-100" src="https://ocelotgroup.org/_next/static/media/devcode.3bf0d105.jpg" style={{color: "transparent"}} />
                </div>
                    
                <div className="w-full max-h-[300px]" >
                    <img alt="market_image" fetchpriority="high" decoding="async" data-nimg="1" className="object-cover w-full h-full rounded-2xl bg-neutral-100" src="https://ocelotgroup.org/_next/static/media/defemale.51e19d6b.jpg" style={{color: "transparent"}} />
                </div>
            </div>


        </section>

        <ContactUsInfo />
        <Footer />
    </div>
  )
}

export default Service;