import React from 'react'

const Newsletter = () =>{
	const mystyle = {
      		color: "white",
     		backgroundColor: "DodgerBlue",
      		padding: "10px",
      		fontFamily: "Arial",
		marginBottom: "20px"
    	};

	return(
		
	<div id="mlb2-1077570" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1077570">
	   <div class="ml-form-align-center ">
	      <div class="ml-form-embedWrapper embedForm">
		 <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
		    <div class="ml-form-embedContent" style=" ">
		       <h4>enlaiškis</h4>
		       <p>Sužinokite naujausią Užimtumo tarnybos informaciją&nbsp;apie situaciją šalies darbo rinkoje, paslaugas, projektus ir renginius.</p>
		       <p>Jūsų pateikti duomenys bus tvarkomi ir saugomi vadovaujantis įstatymais.</p>
		    </div>
		    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/k7u2u4" data-code="k7u2u4" method="post" target="_blank">
		       <div class="ml-form-formContent">
			  <div class="ml-form-fieldRow ml-last-item">
			     <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
				<input type="email" class="form-control" data-inputmask="" name="fields[email]" value="" placeholder="Jūsų el. pašto adresas" aria-invalid="false">
			     </div>
			  </div>
		       </div>
		       </style>
		       <input type="hidden" name="ml-submit" value="1" aria-invalid="false">
		       <div class="ml-form-embedSubmit">
			  <button type="submit" class="primary">Prenumeruoti</button>
			  <button disabled="disabled" style="display: none;" type="button" class="loading">
			     <div class="ml-form-embedSubmitLoad">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			     </div>
			  </button>
		       </div>
		    </form>
		 </div>
		 <div class="ml-form-successBody row-success" style="display: none">
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
