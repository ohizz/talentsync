export const Faq = () => {
    return (
        <div className=" mt-8 p-4 md:p-20 text-left  flex justify-center flex-wrap md:flex-nowrap gap-x-20">
            <div className="mb-10 md:mb-0 w-full md:w-1/3"> 
                <p className="text-blue-700">support</p>
                <h1 className="text-2xl">FAQ</h1>
                <p className="text-slate-500 ">Everything you need to know about the product and billin. Can't find the answer you're looking for? Please <span className="underline">chat to our friendly team</span></p>
            </div>
            <div className="w-full md:w-1/2 flex-col flex gap-y-8">
                <div className="border border-slate-300 p-4 bg-slate-100 rounded-lg">
                <h3 className="mb-2.5">How many participants can join a ClearLink video conference <span>-</span></h3>
                <p className="text-slate-500">ClearLink offres flexible meeting options. Depending on your subscription plan, you can host meeting with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring youhave the right fit for your need</p>
                </div>
                <div className="border-b border-slate-300 pb-3">
                    <h3>Can i use ClearLink on multiple devices? <span>+</span></h3>
                </div>
                <div className="border-b border-slate-300 pb-3">
                    <h3>Is ClearLink compatible with ither video conferencing platforms? <span>+</span></h3>
                </div>
                <div className="border-b border-slate-300 pb-3">
                    <h3>How does ClearLink ensure the security of my video conferences? <span> +</span></h3>
                </div>
                <div className="border-b border-slate-300 pb-3">
                    <h3>Is ClearLink compatible with ither video conferencing platforms? <span>+</span></h3>
                </div>
                <div className="border-b border-slate-300 pb-3">
                    <h3>Is ClearLink compatible with ither video conferencing platforms?<span>+</span></h3>
               </div>
            </div>
     </div>
 )
}