// Accordion.js 

export default function Accordion(props) { 
	return ( 
		<div className="border rounded-md mb-1"> 
			<button 
				className="w-full p-4 text-left bg-gray-200 
						hover:bg-gray-300 transition duration-300"
				onClick={props.toggleAccordion} 
			> 
				{props.title} 
				<span className={`float-right transform 
								transition-transform duration-300`}> 
					{props.isOpen ? '-' : '+'}
				</span> 
			</button> 
			{props.isOpen && ( 
				<div className="p-4 bg-white"> 
					{props.data} 
				</div> 
			)} 
		</div> 
	); 
}; 
