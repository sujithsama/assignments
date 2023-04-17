var i=0;
function add(){
    var val=document.getElementById('text').value;
   //const para = document.createElement("p");
   para=`<div class="section" id="section${i}">
      
   </div>`;
   if(val=='')
   {
    alert("enter valid event");
   }
   else{
    var count=0;
    for(let count=1;count<i;count++)
    {
       
        if(document.getElementById(`section${count}`).value==val)
        {
            alert("en");
            count++;
        }
    }
    if(count==0)
    {
        document.getElementById("bodysection").innerHTML+=para;
        document.getElementById(`section${i}`).innerHTML+=val;
        i++;
    }
    else{
        alert("Duplicate events not allowed")
    }
   
   }
   

   //document.getElementById("bodysection").innerText+=val;
   //document.getElementById("events")
  //const node = document.createTextNode(val);
 // para.appendChild(node);
  //document.write("hi")
 // const element = document.getElementById("bodysection");
 // element.appendChild(para);
  }