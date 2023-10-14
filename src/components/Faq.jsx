import { useState } from "react"
import Accordion from "./Accordion";

export const Faq = () => {
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'How many participants can join a ClearLink video conference ', 
            data: `ClearLink offres flexible meeting options. Depending on your subscription plan, you can host meeting with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring youhave the right fit for your need.`, 
            isOpen: false
        }, 
        { 
            key: 2, 
            title: 'Can i use ClearLink on multiple devices?', 
            data: `ClearLink offres flexible meeting options. Depending on your subscription plan, you can host meeting with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring youhave the right fit for your need.`, 
            isOpen: false
        }, 
        { 
            key: 3, 
            title: 'Is ClearLink compatible with ither video conferencing platforms?', 
            data: ``, 
            isOpen: false
        }, 
    ]); 
    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
  
        setAccordion(updatedAccordions); 
    }; 
  
    return (
        <div className=" mt-8 p-4 md:p-20 text-left  flex justify-center flex-wrap md:flex-nowrap gap-x-20">
            <div className="mb-10 md:mb-0 w-full md:w-1/3"> 
                <p className="text-blue-700">support</p>
                <h1 className="text-2xl">FAQ</h1>
                <p className="text-slate-500 ">Everything you need to know about the product and billin. Can't find the answer you're looking for? Please <span className="underline">chat to our friendly team</span></p>
            </div>
            <div className="w-full md:w-1/2 flex-col flex gap-y-8">
               
                
                {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))} 
                
            </div>
     </div>
 )
}