function event_date_end()
{
	var i,res;
	res=document.querySelectorAll('span[property="Event-Date-enddate"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "yellow";
	}
}

