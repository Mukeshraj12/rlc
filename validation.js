function valid()
{
	v1=document.getElementById("bx1");
	e1=document.getElementById("er1");
	exp1=/^[a-zA-Z ]{3,20}$/;
	if(v1.value=="")
	{
		e1.innerHTML="enter your name";
		v1.focus();
		return false;
	}
	else if(exp1.test(v1.value)==false){
		e1.innerHTML="enter valid name";
		v1.focus();
		return false;
	}
	
	else{
		e1.innerHTML="";
	}
	v2=document.getElementById("bx2");
	e2=document.getElementById("er2");
	exp2=/^[6-9]{1}[0-9]{9}$/;
	if(v2.value=="")
	{
		e2.innerHTML="enter your name";
		return false;
	}
	else if(exp2.test(v2.value)==false){
		e2.innerHTML="enter valid name";
		v2.focus();
		return false;
	else{
		e2.innerHTML="";
	}
	v3=document.getElementByName("gender");
	e3=document.getElementById("er5");
	if(v3[0].checked==false && v3[1].checked==false)
	{
		e3.innerHTML="select your gender";
		return false;
	}
	else{
	e3.innerHTML="";
	}