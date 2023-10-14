import people from '../assets/people.svg'
import crystal from '../assets/crystal.svg'
import noise from '../assets/noise.svg'
import scheduleing from '../assets/scheduleing.svg'
import bank from '../assets/bank.svg'
import arrow from '../assets/arrow.svg'
export const Middle = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-center items-center '>
            <div className='text-left flex flex-col gap-y-4 '>
            <p className="text-blue-600 font-semibold">The ClearLink Advantage</p>
            <h2 className="text-2xl">Why choose ClearLink?</h2>
            <p className=" tracking-wide text-slate-400">in a world where connection is everything, ClearkLink takes the lead. Our cutting-edge video conferencing app offers:</p>
                </div>
                <div className='w-1/2 relative z-100'> <img src={arrow} /></div>
            </div>
            <div className='-mt-[20px] flex justify-center items-center gap-x-4 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row'>
            <div className="mt-10 md:mt-0 text-left grid auto-rows-fr grid-cols-2 gap-10">
                    <div className=''>
                        <div className='border-2 rounded-full p-2.5 bg-slate-100 w-10'>
                        <img src={crystal} className=''/>
                        </div>
                    <h3 className='font-semibold text-slate-800 my-4 text-lg'>Crystal-clear HD video</h3>
                    <p className='text-slate-500'>No more pixelation or blurrness - just stunning, lifelike clarity that brings your team closer in meetings</p>
                </div>
                    <div className=''>
                    <div className='border-2 rounded-full p-2.5 bg-slate-100 w-10'>
                        <img src={noise} className=''/>
                        </div>
                    <h3 className='font-semibold text-slate-800 my-4 text-lg'>Noise-canceling audio</h3>
                    <p className='text-slate-500'>say goodbye to distractions with our advance audio tech for crsip, interruption-free conversations.</p>
                    </div>
                    <div className=''>
                    <div className='border-2 rounded-full p-2.5 bg-slate-100 w-10'>
                        <img src={scheduleing} className=''/>
                        </div>
                    <h3 className='font-semibold text-slate-800 my-4 text-lg'>Scheduling made easy</h3>
                    <p className='text-slate-500'>Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations and receive reminders in one place.</p>
                    </div>
                    <div className=''>
                    <div className='border-2 rounded-full p-2.5 bg-slate-100 w-10'>
                        <img src={bank} className=''/>
                        </div>
                    <h3 className='font-semibold text-slate-800 my-4 text-lg'>Bank-grade security</h3>
                    <p className='text-slate-500'>Your privacy is our priority withbank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
                </div>
                </div>    
                
                <div><img className='w-screen' src={people}/></div>
            </div>
     </div>
 )
}