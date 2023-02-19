const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var repeat=setInterval(twentyfour,1000);;
function twentyfour(){
  let date=new Date();

let hours=0;
let minutes=0;
let meridian="";
let seconds=0;
if(date.getHours()<10){
    hours="0"+date.getHours();
}
else{
    hours=date.getHours();
}
if(date.getMinutes()<10){
    minutes="0"+date.getMinutes();
}
else{
    minutes=date.getMinutes();
}
if(date.getHours()<=12){
    meridian="AM";
}
else{
    meridian="PM";
}
if(date.getSeconds()<10){
    seconds="0"+date.getSeconds();
}
else{
    seconds=date.getSeconds();
}
document.getElementById("day").innerText=weekday[date.getDay()]+",";
document.getElementById("date").innerText=date.getDate()+" :";
document.getElementById("month").innerText=month[date.getMonth()]+" :";
document.getElementById("year").innerText=date.getFullYear();
document.getElementById("hours").innerText=hours+" :";
document.getElementById("minutes").innerText=minutes+" :";
document.getElementById("seconds").innerText=seconds;
document.getElementById("meridian").innerText=meridian;
}
function twelvefour(){
    let date=new Date();
  
  let hours=0;
  let minutes=0;
  let meridian="";
  let seconds=0;
  if(date.getHours()<10){
      hours="0"+date.getHours();
  }
  else{
      hours=date.getHours();
  }
  if(date.getMinutes()<10){
      minutes="0"+date.getMinutes();
  }
  else{
      minutes=date.getMinutes();
  }
  if(date.getHours()<=12){
      meridian="AM";
  }
  else{
      meridian="PM";
  }
  if(date.getSeconds()<10){
      seconds="0"+date.getSeconds();
  }
  else{
      seconds=date.getSeconds();
  }
  if(hours>12){
    hours=hours-12;
  }
  document.getElementById("day").innerText=weekday[date.getDay()]+",";
  document.getElementById("date").innerText=date.getDate()+" :";
  document.getElementById("month").innerText=month[date.getMonth()]+" :";
  document.getElementById("year").innerText=date.getFullYear();
  document.getElementById("hours").innerText=hours+" :";
  document.getElementById("minutes").innerText=minutes+" :";
  document.getElementById("seconds").innerText=seconds;
  document.getElementById("meridian").innerText=meridian;
  }
  function tfour(){
    clearInterval(repeat);
    repeat=setInterval(twentyfour,1000);
  }
  function twelve(){
    clearInterval(repeat);
    repeat=setInterval(twelvefour,1000);
  }
