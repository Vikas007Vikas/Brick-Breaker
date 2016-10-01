function event_name()
{
	var i,res;
	res=document.querySelectorAll('span[property="event-name"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "red";
	}
}


