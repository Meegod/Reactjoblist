import React from 'react';


  function jobBoardComponent({job:{logo,company,contract,
  	isNew,featured,position,role,level,postedAt,location,
  	languages,tools}}){
  	const langAndTools=[];


  	  if(languages){
  	  	langAndTools.push(...languages);
  	  }
  	  if(tools){
  	  	langAndTools.push(...tools);
  	  }
     return(
<div className=
{`flex flex-col bg-white shadow-md 
	m-4 p-6 my-16 mx-10 rounded
	${featured && 'border-l-4 border-green-200 border-solid'}
  sm:flex-row
	`}>
<div>
	<img 
	className="-mt-16 mb-4 w-20
	h-20  sm:h-24 sm:w-24
	sm:my-0"

	src={`${logo}`} alt={company}/>
</div>
<div className=" flex flex-col justify-between ml-4">
	<h3 className="font-bold  text-blue-300">{company}
 {isNew &&(
 	<span className="text-white bg-green-200 font-bold
       m-2 p-2 rounded-full text-sm text-base
       py-1 px-2">New</span>

 	)}
 {featured &&(
 	<span className="text-white bg-black font-bold
       mr-4 p-2 rounded-full text-base
       py-1 px-2 text-sm">featured</span>

 	)}

	</h3>
	<h2 className="font-bold text-xl my-2
	sm:my-0">{position}</h2>
	<p className="text-gray-700">
		{postedAt} * {contract} * {location}
	</p>
</div> 
<div className="flex flex-wrap
mt-4 mx-4
items-center
m-4 pt-4 border-t border-gray-500
sm:ml-auto sm:border-0
sm:pt-0 sm:mt-0">
	{
		langAndTools?
		langAndTools.map(langAndTool=>(
       <span className="text-black-100 bg-green-200 font-bold
       m-2 
       p-2 mr-4 rounded py-1 px-2
       sm:mb-0">
       {langAndTool}</span>))
		:''

	}
</div>



</div>

     	)




  }


export default jobBoardComponent;