import mockup from '../assets/mockup.svg'
import tick from '../assets/tick.svg'
export const Mockup = () => {
    return (
        <div className='mt-8 p-4 md:p-20 md:pr-0 text-left  flex justify-center flex-wrap md:flex-nowrap gap-x-20 '>
            <div className='text-left flex flex-col gap-y-5 w-full md:w-1/2'>
                <h1 className='text-2xl'>Ready to clear the path to perfect communication?</h1>
                <p className='flex gap-x-2'><img src={ tick} className=''/>30 day free trail</p>
                <p className='flex gap-x-2'><img src={ tick} className=''/>Camcel at any time</p>
                <p className='flex gap-x-2'><img src={ tick} className=''/>Access to all features</p>
                <p className='flex gap-x-2'><img src={ tick} className=''/>Personalized onboarding</p>
                <div className="flex gap-x-2 md:gap-x-4">
        <button className="text-xs md:text-sm bg-white border-slate-500 px-2 text-black border rounded-full ">Take to sales</button>
        <button  className="text-xs md:text-sm bg-blue-700 px-4 py-2 text-white border rounded-full ">sign up for free</button>
      </div> 
            </div>
            <div className='mt-10 md:mt-0 w-2/2'>
            <img src={mockup} className=''/>
           </div>
    </div>
)
}