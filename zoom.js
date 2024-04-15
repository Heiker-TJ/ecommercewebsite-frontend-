var width = 100;
var addition =2;
 var intervalID = 0;
function increase()
{

 clearInterval(intervalID)

 intervalID= setInterval(zoomin,10)

}
 function decrease()
 {
 clearInterval(intervalID)

 intervalID= setInterval(zoomout, 10)

}

 function zoomin()
 

{ if(width<200) 
   
    {


  width= width+addition;


document.getElementById("imgg").style.width
document.getElementById("imgg1").style.width
document.getElementById("imgg2").style.width
document.getElementById("imgg3").style.width
document.getElementById("imgg4").style.width
document.getElementById("imgg6").style.width
document.getElementById("imgg7").style.width
document.getElementById("imgg5").style.width
console.log(width)

} else {

clearInterval(intervalID)

}}

 function zoomout()

 {

if(width>100)
{
    width=width-addition
    document.getElementById("imgg").style.width
    document.getElementById("imgg1").style.width
document.getElementById("imgg2").style.width
document.getElementById("imgg3").style.width
document.getElementById("imgg4").style.width
document.getElementById("imgg6").style.width
document.getElementById("imgg7").style.width
document.getElementById("imgg5").style.width
    console.log(width)
}


else

{

clearInterval(intervalID)

}
 }
