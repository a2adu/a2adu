import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const Footer = () =>{
	const useStyles = makeStyles((theme) => ({
		root: {
		  '& > * + *': {
			marginLeft: theme.spacing(2),
		  },
		},
	  }));
	  
	const classes = useStyles();

	return (
	<div className="elementor-container elementor-column-gap-default">
	<div className="elementor-element elementor-element-1e64df3 elementor-column elementor-col-20 elementor-inner-column" data-id="1e64df3" data-element_type="column">
	   <div className="elementor-column-wrap  elementor-element-populated">
	      <div className="elementor-widget-wrap">
				<div className="elementor-element elementor-element-ae8c911 elementor-widget elementor-widget-heading" data-id="ae8c911" data-element_type="widget" data-widget_type="heading.default">
					<div className="elementor-widget-container">
						<h4 className="elementor-heading-title elementor-size-default">Struktūra ir kontaktai</h4>
					</div>
				</div>
		 <div className="elementor-element elementor-element-6c7f8db elementor-align-left elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list" data-id="6c7f8db" data-element_type="widget" data-widget_type="icon-list.default">
		    <div className="elementor-widget-container">
			 
			<Typography className={classes.root}>
			<Link display="block" href="https://uzt.lt/struktura-ir-kontaktai-2/vadovas/" > 	
			Link1 				 
		             </Link>
		      
		   
		             <Link display="block" href="https://uzt.lt/struktura-ir-kontaktai/vadovo-darbotvarke-2/">						 
		      			Link2 
 
		             </Link >
 
		             <Link display="block" href="https://uzt.lt/struktura-ir-kontaktai-2/struktura/">	
					 Link3 				 
		             </Link >
		       
		 
		             <Link display="block"  href="https://uzt.lt/struktura-ir-kontaktai-2/kontaktai/">	
					 Link4 				  
		             </Link >
		     
	 
		             <Link display="block" href="https://uzt.lt/veiklos-uzduotys/">	
					 Link5				 
		             </Link >
		 
	 
		             <Link display="block" href="https://uzt.lt/struktura-ir-kontaktai/tarybos_komisijos_darbogrupes/">						 
					 Link6
		             </Link >
		   
		   
		             <Link display="block" href="https://uzt.lt/apie">				 
		    Link7
		             </Link >
		        
			   </Typography>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-bf2c3ba elementor-widget elementor-widget-image" data-id="bf2c3ba" data-element_type="widget" data-widget_type="image.default">
		    <div className="elementor-widget-container">
		       <div className="elementor-image">
		          <a href="https://heyzine.com/flip-book/c1034a5647.html" target="_blank" užimtumo="" tarnyba="" className="no-lightbox">&nbsp;</a>
		       </div>
		    </div>
		 </div>
	      </div>
	   </div>
	</div>
	<div className="elementor-element elementor-element-191b0d17 elementor-column elementor-col-20 elementor-inner-column" data-id="191b0d17" data-element_type="column">
	   <div className="elementor-column-wrap  elementor-element-populated">
	      <div className="elementor-widget-wrap">
		 <div className="elementor-element elementor-element-7af81df4 elementor-widget elementor-widget-heading" data-id="7af81df4" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default">Teisinė informacija</h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-2bb9104c elementor-align-left elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list" data-id="2bb9104c" data-element_type="widget" data-widget_type="icon-list.default">
		    <div className="elementor-widget-container">
		       <ul className="elementor-icon-list-items">
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/teisine-informacija-2/teises-aktai1">					<span className="elementor-icon-list-text">Teisės aktai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/teisine-informacija-2/teises-aktu-projektai/">					<span className="elementor-icon-list-text">Teisės aktų projektai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/teisine-informacija-2/tyrimai-ir-analizes/">					<span className="elementor-icon-list-text">Tyrimai ir analizės</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href=" https://uzt.lt/teisine-informacija-2/teises-aktu-pazeidimai/">					<span className="elementor-icon-list-text">Teisės aktų pažeidimai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/teisine-informacija-2/teisinio-reguliavimo-sistema/">					<span className="elementor-icon-list-text">Teisinio reguliavimo sistema</span>
		             </a>
		          </li>
		       </ul>
		    </div>
		 </div>
	      </div>
	   </div>
	</div>
	<div className="elementor-element elementor-element-3b759a4b elementor-column elementor-col-20 elementor-inner-column" data-id="3b759a4b" data-element_type="column">
	   <div className="elementor-column-wrap  elementor-element-populated">
	      <div className="elementor-widget-wrap">
		 <div className="elementor-element elementor-element-5d705834 elementor-widget elementor-widget-heading" data-id="5d705834" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default">Administracinė informacija</h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-55f562d0 elementor-align-left elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list" data-id="55f562d0" data-element_type="widget" data-widget_type="icon-list.default">
		    <div className="elementor-widget-container">
		       <ul className="elementor-icon-list-items">
		          <li className="elementor-icon-list-item">
		             <a href=" https://uzt.lt/administracine-informacija/dazniausiai-uzduodami-klausimai/">					<span className="elementor-icon-list-text">Dažniausiai užduodami klausimai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/nuostatai/">					<span className="elementor-icon-list-text">Nuostatai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href=" https://uzt.lt/administracine-informacija/planavimo-dokumentai/">					<span className="elementor-icon-list-text">Planavimo dokumentai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/kokybes-politika-2/">					<span className="elementor-icon-list-text">Kokybės politika</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/viesieji-pirkimai/ ">					<span className="elementor-icon-list-text">Viešieji pirkimai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/biudzeto-vykdymo-ataskaitu-rinkiniai/">					<span className="elementor-icon-list-text">Biudžeto vykdymo ataskaitų rinkiniai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/paskatinimai-ir-apdovanojimai/">					<span className="elementor-icon-list-text">Paskatinimai ir apdovanojimai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/finansiniu-ataskaitu-rinkiniai/">					<span className="elementor-icon-list-text">Finansinių ataskaitų rinkiniai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/darbo-rinka/klientu-apklausu-rezultatai/">						<span className="elementor-icon-list-icon">
		             <i aria-hidden="true" className="fas fa-check"></i>						</span>
		             <span className="elementor-icon-list-text">Klientų apklausų ataskaitos </span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/atsargos-kariu-bankas/">						<span className="elementor-icon-list-icon">
		             <i aria-hidden="true" className="fas fa-check"></i>						</span>
		             <span className="elementor-icon-list-text">Atsargos karių bankas</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href=" https://uzt.lt/administracine-informacija/veiklos-ataskaitos/">					<span className="elementor-icon-list-text">Veiklos ataskaitos</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/tarnybiniai-lengvieji-automobiliai/">					<span className="elementor-icon-list-text">Tarnybiniai lengvieji automobiliai</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/darbo-uzmokestis/">					<span className="elementor-icon-list-text">Darbo užmokestis</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/tarptautinis-bendradarbiavimas/">					<span className="elementor-icon-list-text">Tarptautinis bendradarbiavimas</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/ukio-subjketu-prieziura/">					<span className="elementor-icon-list-text">Ūkio subjektų priežiūra</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/administracine-informacija/konkursai-i-laisvas-darbo-vietas/">					<span className="elementor-icon-list-text">Konkursai į laisvas darbo vietas</span>
		             </a>
		          </li>
		          <li className="elementor-icon-list-item">
		             <a href="https://uzt.lt/aukcionai/">						<span className="elementor-icon-list-icon">
		             <i aria-hidden="true" className="fas fa-check"></i>						</span>
		             <span className="elementor-icon-list-text">Aukcionai</span>
		             </a>
		          </li>
		       </ul>
		    </div>
		 </div>
	      </div>
	   </div>
	</div>
	<div className="elementor-element elementor-element-ea3bd8d elementor-column elementor-col-20 elementor-inner-column" data-id="ea3bd8d" data-element_type="column">
	   <div className="elementor-column-wrap  elementor-element-populated">
	      <div className="elementor-widget-wrap">
		 <div className="elementor-element elementor-element-609e65ac elementor-widget elementor-widget-heading" data-id="609e65ac" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://soczemelapis.uzt.lt/" target="_blank">Socialinės pagalbos žemėlapis</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-d888cdf elementor-widget elementor-widget-heading" data-id="d888cdf" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-67a58a3 elementor-widget elementor-widget-heading" data-id="67a58a3" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">Veiklos sritys</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-d43c57b elementor-widget elementor-widget-heading" data-id="d43c57b" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-bf05fed elementor-widget elementor-widget-heading" data-id="bf05fed" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/paslaugos/ ">Paslaugos</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-352bf8f elementor-widget elementor-widget-heading" data-id="352bf8f" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-382dae1 elementor-widget elementor-widget-heading" data-id="382dae1" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href=" https://uzt.lt/administracine-informacija/korupcijos-prevencija/">Korupcijos prevencija</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-17f2d1e elementor-widget elementor-widget-heading" data-id="17f2d1e" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-5ee4edd elementor-widget elementor-widget-heading" data-id="5ee4edd" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/atviri-duomenys">Atviri duomenys　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-996047c elementor-widget elementor-widget-heading" data-id="996047c" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-d372941 elementor-widget elementor-widget-heading" data-id="d372941" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/asmens-duomenu-sauga/">Asmens duomenų sauga</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-d9eac72 elementor-widget elementor-widget-heading" data-id="d9eac72" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-4f9b241 elementor-widget elementor-widget-heading" data-id="4f9b241" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/praneseju-apsauga/">Pranešėjų apsauga</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-e5e9c38 elementor-widget elementor-widget-heading" data-id="e5e9c38" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/administracine-informacija/veiklos-sritys/ ">　</a></h4>
		    </div>
		 </div>
		 <div className="elementor-element elementor-element-4d9ba40 elementor-widget elementor-widget-heading" data-id="4d9ba40" data-element_type="widget" data-widget_type="heading.default">
		    <div className="elementor-widget-container">
		       <h4 className="elementor-heading-title elementor-size-default"><a href="https://uzt.lt/nuorodos">Nuorodos</a></h4>
		    </div>
		 </div>
	      </div>
	   </div>
	 </div>
</div> 
	);
};

export default Footer;
