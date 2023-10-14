// Accordion.js 

export default function Accordion(props) { 
	return ( 
		<div className="border-gray-100 bg-gray-100 rounded-md border mb-1"> 
			<button 
				className="w-full p-4 text-left  
						hover:bg-gray-200 transition duration-300"
				onClick={props.toggleAccordion} 
			> 
				{props.title} 
				<span className={`border border-gray-500 text-gray-500 rounded-full  w-6 h-6 text-center float-right transform 
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
