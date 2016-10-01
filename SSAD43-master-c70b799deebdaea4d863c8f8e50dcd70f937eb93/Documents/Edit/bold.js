var cbold=0;
function bold(stri)
{
	if(cbold%2==0)
	{
		var str = stri.bold();
		document.getElementById("span").innerHTML = str;
	}
	cbold++;
}
/*issues-:
  1) bold once done is not reversed.
  2) have to pass a string. implement DOM search.
  3) add a way to get back to normal
  */


