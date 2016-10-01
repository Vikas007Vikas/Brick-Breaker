function date_end()
{
	var i,res;
	res=document.querySelectorAll('span[property="date-enddate"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "blue";
	}
}

