import React from 'react'

const Newsletter = () =>{
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
								<form className="ml-block-form" action="https://app.mailerlite.com/webforms/submit/k7u2u4" data-code="k7u2u4" method="post" target="_blank">
								   <div className="ml-form-formContent">
										<div className="ml-form-fieldRow ml-last-item">
											<div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
												<input type="email" className="form-control" data-inputmask="" name="fields[email]" value="" placeholder="Jūsų el. pašto adresas" aria-invalid="false"/>
											</div>
										</div>
								   </div>
								   
								   <input type="hidden" name="ml-submit" value="1" aria-invalid="false"/>
								   
								   <div className="ml-form-embedSubmit">
										<button type="submit" className="primary">Prenumeruoti</button>
										<button disabled="disabled" style={displayNone} type="button" className="loading">
											<div className="ml-form-embedSubmitLoad">
												<div>&nbsp;</div>
												<div>&nbsp;</div>
												<div>&nbsp;</div>
												<div>&nbsp;</div>
											</div>
										</button>
								   </div>
								</form>
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
