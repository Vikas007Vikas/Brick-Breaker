var cnt=0;
function italics(stri)
{
	if(cnt%2==0)
	{
		var str = stri.italics();
		document.getElementById("span").innerHTML = str;
	}
	cnt++;
}

/*issues-:
	1->italics can't be reversed.
	2->have to implement DOM search
	
*/

