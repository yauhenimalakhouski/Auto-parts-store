"use strict";

onload = function ()
{
for (var lnk = document.links, j = 0; j < lnk.length; j++)
if (lnk [j].href == document.URL) lnk [j].style.cssText = 'color:blue; text-shadow: 5px 5px 5px gray';
}

