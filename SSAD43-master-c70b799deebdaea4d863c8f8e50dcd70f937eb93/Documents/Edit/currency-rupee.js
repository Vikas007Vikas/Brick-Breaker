function currency_rupee(stri)
{
	var i,res;
	res=document.querySelectorAll('span[property="currency-rupee"]');
	for(i=0;i<res.length;i++)
	{
		res[i].style.backgroundColor = "yellow";
	}
	
}

