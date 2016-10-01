function currency_dollar()
{
	var i,res;
	res=document.querySelectorAll('span[property="currency-dollar"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "yellow";
	}
}


