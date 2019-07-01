var r=document.getElementById("r");
var g=document.getElementById("g");
var b=document.getElementById("b");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)); 
}
var xc=getRandomInt(256);
var yc=getRandomInt(256);
var zc=getRandomInt(256);
r.textContent=xc;
g.textContent=yc;
b.textContent=zc;
var target=getRandomInt(6);
var x=document.querySelectorAll("td");
for (var i=0;i<x.length;i++)
{
	if (i==target)
	{
		x[i].style.background="rgb("+xc+","+yc+","+zc+")";
	}
	else
	{
		x[i].style.background="rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")";
	}
}
document.querySelector("#nwc").addEventListener("click",function(){
location.reload();
});

for (var i=0;i<x.length;i++)
{
	x[i].addEventListener("click",function(){
		if (this.id==""+target)
		{
				document.querySelector("header").style.backgroundColor="rgb("+xc+","+yc+","+zc+")";
			    for (var j=0;j<6;j++)
				document.querySelectorAll("td")[j].style.backgroundColor="rgb("+xc+","+yc+","+zc+")";
					
				alert("WON");
		}
		else
		{
			this.style.background="DARKSLATEGREY";
		}
	});
}
