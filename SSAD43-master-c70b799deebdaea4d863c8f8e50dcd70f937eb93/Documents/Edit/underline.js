function underline()
{
    var span = document.createElement("span");
    var prop = document.createAttribute("style");
    if (window.getSelection().toString().length!=0)
    {
        prop.value="text-decoration:underline"
        span.setAttribute(prop);
        var sel = window.getSelection();
        if (sel.rangeCount)
        {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range)
        }
    }
}

