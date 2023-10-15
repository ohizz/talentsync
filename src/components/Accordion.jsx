// Accordion.js 

export default function Accordion(props) { 
	return ( 
		<div className="border-gray-100 border-b rounded-lg  mb-1"> 
			<button 
				className="w-full p-4  items-center  text-left justify-between gap-x-10 
						hover:bg-gray-100 transition duration-300"
				onClick={props.toggleAccordion} 
			> 
				{props.title} 
				<span className={`border border-gray-500 text-gray-500 rounded-full w-[1.5rem] h-[1.5rem] text-center float-right leading-6  transform 
								transition-transform duration-300`}> 
					{props.isOpen ? '-' : '+'}
				</span> 
			</button> 
			{props.isOpen && ( 
				<div className="p-4 bg-slate-100 "> 
					{props.data} 
				</div> 
			)} 
		</div> 
	); 
}; 
