$(function(){
	$("#btn1").click(function(){
		var elems = $("span.myClass > span");
		elems.each(function(){
			var linkText= $(this).text();
			$("<a/>").attr({"href": linkText, "target": "_blank"}).text(linkText).appendTo("body");
		});
		elems.remove();
	});
});
--------------------------------------------------------------------------------
/* corresponding html elements */
//<span class="myClass"><span>domain.com/about</span></span><br />
//<span class="myClass"><span>domain1.com/about</span></span><br />
//<span class="myClass"><span>domain2.com/about</span></span><br />
//<button id="btn1">click me</button>
