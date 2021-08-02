import React from 'react'

const TopNav= () =>{
	return(
		<div id="top-bar-inner" class="clr">
<div id="top-bar-content" class="clr has-content top-bar-right">
<span class="topbar-content">
<form method="get" class="searchform" id="searchform" action="https://uzt.lt/">
<input type="text" class="field" name="s" id="s" placeholder="🔍">
<input type="hidden" name="id" value="1314"></form>
&nbsp;
<a href="https://www.ldb.lt/LDBPortal/Authentication/Logon.aspx"><span style="font-size: 13pt">PRISIJUNGTI</span></a>
&nbsp;
<a href="https://www.ldb.lt/LDBPortal/Authentication/Register.aspx"><span style="font-size: 13pt">REGISTRACIJA</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://uzt.lt/en"><span style="font-size: 13pt">EN  </span></a>
<a href="https://uzt.lt/ru"><span style="font-size: 13pt">  RU</span></a>
&nbsp;&nbsp;
</span>
</div><!-- #top-bar-content -->
</div>	
	);
};

export default TopNav;
