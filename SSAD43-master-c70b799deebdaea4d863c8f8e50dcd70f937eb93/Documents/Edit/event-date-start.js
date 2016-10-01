function event_date_start()
{
	var i,res;
	res=document.querySelectorAll('span[property="event-date-startdate"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "yellow";
	}
}

