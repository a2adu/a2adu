import React from 'react'
import GNewsletterButtons from './googleBtns/GNewsletterButtons.js'


const Newsletter = () =>{
	{/* CSS variables, inline style */}
	const displayNone = {
		display: "None"
	};

	const mystyle = {
      		color: "white",
     		backgroundColor: "DodgerBlue",
      		padding: "10px",
      		fontFamily: "Arial",
		    marginBottom: "20px"
    	};

	return(
		<div id="mlb2-1077570" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1077570">
			   <div className="ml-form-align-center ">
					  <div className="ml-form-embedWrapper embedForm">
							 <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
								<div className="ml-form-embedContent" style={mystyle}>
								   <h4>enlaiškis</h4>
								   <p>Sužinokite naujausią Užimtumo tarnybos informaciją&nbsp;apie situaciją šalies darbo rinkoje, paslaugas, projektus ir renginius.</p>
								   <p>Jūsų pateikti duomenys bus tvarkomi ir saugomi vadovaujantis įstatymais.</p>
								</div>
								
								   
								{/* Material-UI TextButtons function being used:    
								export default function TextButtons() {
  							        	const classes = useStyles();
								          <input type="hidden" name="ml-submit" value="1" aria-invalid="false"/>

									   <div className={classes.root}>
										return (
										<Button type="submit" className="primary" variant="outlined">Prenumeruoti</Button>
										<Button disabled="disabled" style={displayNone} type="button" className="loading">
											<div className="ml-form-embedSubmitLoad">
												<div>&nbsp;</div>
												<div>&nbsp;</div>
												<div>&nbsp;</div>
												<div>&nbsp;</div>
											</div>
										</Button>
								   	   </div>);
								} {/* End of Material-UI function */}
								<GNewsletterButtons/>
							 
							 </div>
							 <div class="ml-form-successBody row-success" style={displayNone}>
									<div class="ml-form-successContent">
										<h4>Dėkojame!</h4>
										<p>Jūs sėkmingai užsiprenumeravote Užimtumo tarnybos&nbsp;naujienlaiškį.</p>
									</div>
							 </div>
						</div>
					</div>
			</div>
	);
};

export default Newsletter;
