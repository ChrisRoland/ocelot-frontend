
import HeaderContainer from './HeaderContainer'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='relative'>
        <HeaderContainer 
            title="Get In touch with us"
            description="Should you have any inquiries, don't hesitate to contact us, and we'll get back
             to you promptly. Make sure to include as much detail as you can."
            modelPath="/models/Parrot.glb"
        />

        <div className='absolute top-160 md:top-140'>        
            <div className='grid md:grid-cols-3 gap-3 bg-black text-white custom-container text-[10px]'>
                <div className='md:col-span-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='grid md:grid-cols-2 gap-3'>
                            
                            <div  className='flex flex-col'>
                                <label htmlFor="" className=''>First Name</label>
                                <input className="input h-10" type="text" />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className=''> Last Name </label>
                                <input type="text" className='h-10 input outline-none' />
                            </div>

                        </div> 
                        
                        <div  className='flex flex-col'>
                            <label htmlFor="" className=''>How may we help you?</label>
                            <input type="text" className='h-10 input outline-none'/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className=''> Description</label>
                            <textarea   rows={4} cols={50}></textarea>
                        </div>


                        <button className='p-2 rounded-lg btn-blue w-[150px] text-[9px]'>Send Message</button>

                    </div>

                </div>

                <div className='flex flex-col gap-3'>
                    <div>
                        <h3 className='text-[13px] font-bold'> Office </h3>
                        <p > No.6 Isheri street, ebute-meta lagos, nigeria </p>
                    </div>
                    <div>
                        <a href="https://ocelotgroup.org/tel:+2348028108892" className='cursor-pointer'>
                            <h3 className='text-[13px] font-bold'> Contact </h3>
                            <p> +234 802 810 8892 marketingocelot@gmail.com</p>
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    </div>
  )
}

export default Contact