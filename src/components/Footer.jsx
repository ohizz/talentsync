import ios from '../assets/ios.svg'
import andriod from '../assets/andriod.svg'
import socials from '../assets/socials.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

export const Footer = () => {
    return (
        <footer>
        <div className=' mt-8 p-4 md:px-20 md:pt-20 pb-10 text-left flex md:justify-center flex-col md:flex-row flex-wrap md:flex-nowrap gap-x-10'>
                <div className=' flex gap-y-4 flex-col w-[24rem]'>
                    <div className='flex items-center gap-x-2 '>
            <svg className="w-4" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/>
<path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/>
</svg> <p className='font-black'>ClearLink</p></div>
                <p>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of the communication</p>
            </div>

            <div className='flex flex-col md:flex-row gap-y-6 md:gap-x-20 mt-10 md:mt-0'>
                <div>
                    <h3 className='text-sm md:text-xs text-slate-400 mb-2'>product</h3>
                    <ul className='text-sm md:text-xs text-slate-600 flex gap-y-3 flex-col'>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className='text-sm md:text-xs text-slate-400 mb-2'>company</h3>
                    <ul  className='text-sm md:text-xs text-slate-600 flex gap-y-3 flex-col'>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-sm md:text-xs text-slate-400 mb-2'>Resources</h3>
                    <ul  className='text-sm md:text-xs text-slate-600 flex gap-y-3 flex-col'>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-sm md:text-xs text-slate-400 mb-2'>Legal</h3>
                    <ul className='text-sm md:text-xs text-slate-600 flex gap-y-3 flex-col'>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-3"> 
                        <h3 className="text-blue-500 font-semibold text-sm md:text-xs">Get the app</h3>
                        
                    <img src={ios} className='w-1/6 md:w-[40rem] lg:w-2/2' />
                    <img src={andriod} className='w-1/6 md:w-[40rem] lg:w-2/2'/>
                </div>
            </div>
</div>
            <div className='bg-slate-100 p-4 md:px-20 md:py-10 flex items-center justify-between'>
                <p className='text-xs text-slate-500'>© 2023 ClearLink. All right reserved</p>
                <div className='flex justify-between items-center gap-x-2 md:gap-x-4'>
                <img src={linkedin} className='w-3 md:w-4' />
                <img src={twitter} className='w-3 md:w-4'/>
                <img src={facebook} className='w-3 md:w-4'/>
                <img src={instagram} className='w-3 md:w-4'/>
                    <img src={github} className='w-3 md:w-4' />
                    
                <img src={youtube} className='w-3 md:w-4'/>
                </div>
            </div>

    </footer>
)
}