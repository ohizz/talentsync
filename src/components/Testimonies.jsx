import shopify from '../assets/shopify.svg'
import shoppic from '../assets/shoppic.svg'
import avatar from '../assets/avatar.svg'
import stars from '../assets/stars.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
export const Testimonies = () => {
    return (
        <div className="mt-48 p-20 text-left bg-slate-200 flex justify-center gap-x-8">
            <div className='flex flex-col gap-y-4 w-1/2'>
                <img src={shopify} className='w-32'/>
                <div className='flex items-center'>
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                </div>

                <p className='text-4xl tracking-wide font-bold text-slate-900'>ClearLink has upgraded our remote meetings. High-quality video, scree sharing, and top-notch security make it essential for our team.</p>

                <div className='flex gap-x-6 items-center'>
                    <div className=''>
                        <img src={ avatar} /></div>
                    <div className='flex flex-col gap-x-2'><h3 className='text-zinc-900 font-bold'>Sarah Thompson</h3><p className='text-slate-800'>Project Manager, Shopify</p></div>
                    <div className='flex items-center gap-x-6'><img src={left} /><img src={ right}/></div>
                </div>
            </div>

            <div><img src={ shoppic} /></div>
     </div>
 )
}