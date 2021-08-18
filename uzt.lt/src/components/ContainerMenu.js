import React from 'react'
import pic1 from './images/1.png' 
import pic2 from './images/2.png' 
import pic3 from './images/3.png' 
import pic4 from './images/4.png' 
import pic5 from './images/5.png' 
import pic6 from './images/6.png' 
import pic7 from './images/7.png' 
import pic8 from './images/8.png' 
import pic9 from './images/9.png' 
 
const ContainerMenu = ({picName, widthImg}) => {
    return(
	<div className="elementor-widget-container">
	   <div className="elementor-image-box-wrapper">
		<figure className="elementor-image-box-img" style={{backgroundImage: `url(${picName})`, width: '100px', height: '20px'}} >
			Registruotis
		    <a href="https://uzt.lt/registracija-ut/" registracija="" className="no-lightbox">
			<img src={picName} width="100" height="50" />
	    		 
	    		<img className="elementor-animation-grow attachment-medium_large size-medium_large" 
	    		alt="Registracija"
				/>    		
	    	    </a>
			 
				{/*srcSet={`${pic2} 768w, ${pic3} 150w, ${pic4} 300w, ${pic5} 1024w, ${pic6} 700w, ${pic7} 1044w sizes="(max-width: 768px) 100vw, 768px`}/> */}
		</figure>
		<div className="elementor-image-box-content">
			 <h3 className="elementor-image-box-title"><a href="https://uzt.lt/registracija-ut/" registracija="">Registracija</a></h3>
		 </div>
	   </div>
       </div>
	 );
};

export default ContainerMenu;
