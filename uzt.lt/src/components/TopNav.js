import React from 'react'

const TopNav= () =>{
	return(
		<div id="top-bar-inner" className="clr">
		   <div id="top-bar-content" className="clr has-content top-bar-right">
		      <span className="topbar-content">
			 <form method="get" className="searchform" id="searchform" action="https://uzt.lt/">
			    <input type="text" className="field" name="s" id="s" placeholder="🔍">
			    <input type="hidden" name="id" value="1314">
			 </form>
			 &nbsp;
			 <a href="https://www.ldb.lt/LDBPortal/Authentication/Logon.aspx"><span style={{fontSize: 13pt}}>PRISIJUNGTI</span></a>
			 &nbsp;
			 <a href="https://www.ldb.lt/LDBPortal/Authentication/Register.aspx"><span style={{fontSize: 13pt}}>REGISTRACIJA</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 <a href="https://uzt.lt/en"><span style={{fontSize: 13pt}}> EN </span></a>
			 <a href="https://uzt.lt/ru"><span style={{fontSize: 13pt}}> RU </span></a>
			 &nbsp;&nbsp;
		      </span>
		   </div>
		   {/* 	#top-bar-content */ }
		</div>
	);
};

export default TopNav;
