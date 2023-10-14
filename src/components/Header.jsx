import img from '../assets/img.svg'
import shopify from '../assets/shopify.svg'
import coinbase from '../assets/coinbase.svg'
import dropbox from '../assets/dropbox.svg'
import intercom from '../assets/intercom.svg'
import marvel from '../assets/marvel.svg'
import automattic from '../assets/automattic.svg'
import stars from '../assets/stars.svg'
import ai from '../assets/ai.svg'
import group from '../assets/group.svg'
import menu from '../assets/menu.svg'
export const Header = () => {
  return (
    <div className=' max-w-6xl px-3 mx-auto my-6 bg-header-bg bg-no-repeat bg-center bg-cover'>
 <header className="bg-slate-200 border rounded-full px-6 py-3 flex justify-between items-center">
      <div className=" flex justify-center gap-x-2"><svg className="w-4" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/>
<path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/>
</svg>
<h1 className="font-black text-sm md:text-md">ClearLink<span className="text-blue-500">.</span></h1>
</div>
<img src={menu} className='w-6 md:hidden'/>
        <div className='hidden md:flex items-center gap-x-4'>
        <ul className="text-xs flex justify-center gap-x-2 md:gap-x-10">
        <li>Products </li>
        <li>Solution</li>
        <li>Resources</li>
        <li>Price</li>
      </ul>
      <div className="flex justify-center gap-x-2 md:gap-x-4">
        <button className="text-xs md:text-sm bg-white border-slate-500 px-2 text-black border rounded-full ">Take to sales</button>
        <button  className="text-xs md:text-sm bg-blue-700 px-1 py-1 md:px-4 md:py-2 text-white border rounded-full ">sign up for free</button>
      </div>     
</div>
     
      </header>
      






<div>
  <div className="mt-10 md:mt-24 flex gap-x-10 flex-wrap md:flex-nowrap">
            <div className="mt-7 text-center md:text-left flex items-start flex-col w-full md:w-1/2 gap-y-10 px-4 md:px-0">
                <h1 className="font-bold text-4xl text-slate-800 font-3xl ">Uniting the world, one video call at a time</h1>
                <p className="text-slate-400">Experience the future of communication with ClearLink where crystal-clear video conferencing meets unparalleled simplicity</p>
                
                <div className='text-center md:text-left flex items-center gap-x-1 md:gap-x-6'>
                    <button className="text-xs md:text-sm bg-blue-700 text-white border-slate-500 w-36 h-10 text-black border rounded-full ">start your free trial</button>
              
              <p className=' items-center gap-x-1 text-xs md:text-sm text-blue-700 font-bold '><img src={ai} className='' />
              
              Discover AI assistant</p>
              
                </div>
                <div>
              <div className='flex flex-cols items-center gap-x-4'>
                <img src={group} className='w-20' />
                <div className=''>
                    <div className='flex items-center'>
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                    <img src={stars} />
                  <img src={stars} />
                  <p className='text-xs md:text-sm'>5.0</p>
                </div>
                
                <p className='text-xs md:text-sm'>from 3,000 + review</p>
                </div>
                </div>
                </div>
            </div>
            <div>
            <div>
              <img src={img}/>
                </div>
                <icon></icon>
            </div>
            </div>
            

            <div className="mt-10 md:mt-40">
                <p className='text-slate-400 text-center '>join 1500 + companies already video conferencing the ClearLink way</p>
          <div className='flex justify-center items-center  mt-10 mb-20 md:mb-32 mx-auto gap-6 md:gap-x-6 flex-wrap '>
            <img className='w-42' src={shopify} />
            <img className='w-42' src={coinbase} />
            <img className='w-42' src={dropbox} />
            <img className='w-42' src={intercom} />
            <img className='w-42' src={marvel} />
            <img className='w-42' src={automattic}/>
          </div>
            </div>
        </div>
    </div>

  );
};
