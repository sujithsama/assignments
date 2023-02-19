console.log("hi");
let clock=setInterval(rep,1000);;
function rep()
{
 
 let date=new Date();
 console.log(date);
 console.log(date);
 let daytime;
 let seconds=0;
 let minutes=0;
 let hours=0;
 hours=date.getHours();
 if(date.getSeconds()<10)
 {
    seconds="0"+date.getSeconds();
 }
 else{
    seconds=date.getSeconds();
 } if(date.getMinutes()<10)
 {
    minutes="0"+date.getMinutes();
 }
 else{
    minutes=date.getMinutes();
 }
let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("dayname").value= weekday[date.getDay()];
 document.getElementById("day").value= date.getDate();
 document.getElementById("month").value= month[date.getMonth()];
 document.getElementById("year").value= date.getFullYear();
 document.getElementById("hour").value= hours;
 document.getElementById("minute").value= minutes;
 document.getElementById("second").value=seconds;
 if(date.getHours()>12){
    daytime="PM";
 }
 else{
    daytime="AM";
 }
 document.getElementById("daytime").value= daytime;
}
function repp()
{
 
 let date=new Date();
 console.log(date);
 console.log(date);
 let daytime;
 let seconds=0;
 let hours=0;
 let minutes=0;
 if(date.getSeconds()<10)
 {
    seconds="0"+date.getSeconds();
 }
 else{
    seconds=date.getSeconds();
 }
 if(date.getMinutes()<10)
 {
    minutes="0"+date.getMinutes();
 }
 else{
    minutes=date.getMinutes();
 }
 if(date.getHours()>12)
 {
    hours="0"+(date.getHours()-12);
 }
 else{
    hours=date.getHours();
 }
let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("dayname").value= weekday[date.getDay()];
 document.getElementById("day").value= date.getDate();
 document.getElementById("month").value= month[date.getMonth()];
 document.getElementById("year").value= date.getFullYear();
 document.getElementById("hour").value= hours;
 document.getElementById("minute").value= minutes;
 document.getElementById("second").value=seconds;
 if(date.getHours()>12){
    daytime="PM";
 }
 else{
    daytime="AM";
 }
 document.getElementById("daytime").value= daytime;
}
//setInterval(rep(),10);
//  document.querySelector(button).click();
function tfour(){
    clearInterval(clock);
    clock=setInterval(rep,1000);
}
function twhr(){
    clearInterval(clock);
   clock= setInterval(repp,1000)
}
//setInterval(rep,1000);

