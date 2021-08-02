import React from 'react'
{/* Importing container menu images  */}
import pic1 from './images/1.png' 
import pic2 from './images/2.png' 
import pic3 from './images/3.png' 
import pic4 from './images/4.png' 
import pic5 from './images/5.png' 
import pic6 from './images/6.png' 
import pic7 from './images/7.png' 
import pic8 from './images/8.png' 
import pic9 from './images/9.png' 

const ContainerMenu = () => {
    return(
	<div className="elementor-widget-container">
	   <div className="elementor-image-box-wrapper">
		<figure className="elementor-image-box-img">
		    <a href="https://uzt.lt/registracija-ut/" registracija="" className="no-lightbox">
	    		<img width="768" height="769" src={pic1} 
	    		className="elementor-animation-grow attachment-medium_large size-medium_large" 
	    		alt="Registracija" srcSet={`${pic1} 768w, ${pic2} 150w, ${pic3} 300w, ${pic4} 1024w, ${pic5} 700w, ${pic6} 1044w sizes="(max-width: 768px) 100vw, 768px`}></a>

		</figure>
		<div className="elementor-image-box-content">
			 <h3 className="elementor-image-box-title"><a href="https://uzt.lt/registracija-ut/" registracija="">Registracija</a></h3>
		 </div>
	   </div>
       </div>
	 );
};

export default ContainerMenu;
