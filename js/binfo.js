//hide code
document.getElementById("hidecode1").style.display = "none";
document.getElementById("hidecode2").style.display = "none";
document.getElementById("hidecode3").style.display = "none";
document.getElementById("hidecode4").style.display = "none";
document.getElementById("hidecode5").style.display = "none";
document.getElementById("hidecode6").style.display = "none";
document.getElementById("hidecode7").style.display = "none";

//start function

function fgiet() {
    //get user input
var binfo=document.getElementById('browser').value;
var appcodeinfo=document.getElementById('appcodename').value;
var lnginfo=document.getElementById('lang').value;
var verinfo=document.getElementById('version').value;
var platforminfo=document.getElementById('platform').value; 
var cookiinfo=document.getElementById('cookie').value; 
var agentinfo=document.getElementById('agent').value; 

  

//verify user input
if(binfo=="appName"){
    
    //show code block
      document.getElementById("hidecode1").style.display = "block";
  
 //browser name
    document.getElementById('showinfo1').innerHTML="<br><b>"+navigator.appName  + "</b>"; 
    
}



if(appcodeinfo=="appCodeName"){
    //show code block
      document.getElementById("hidecode2").style.display = "block";
      
      //browser app code name
    document.getElementById('showinfo2').innerHTML="<b>"+ navigator.appCodeName + "</b>"; 
    

}

if(lnginfo=="applng"){
    //show code block
      document.getElementById("hidecode3").style.display = "block";
      //browser language
    document.getElementById('showinfo3').innerHTML="<b>" +navigator.language  +"</b>"; 
    
    
}
if(verinfo=="appVersion"){
     //show code block
      document.getElementById("hidecode4").style.display = "block";
      //browser version
    document.getElementById('showinfo4').innerHTML="<b>" +navigator.appVersion  +"</b>"; 
    
       
}
if(platforminfo=="platform"){
     //show code block
      document.getElementById("hidecode5").style.display = "block";
      //browser platform
      document.getElementById('showinfo5').innerHTML="<b>" +navigator.platform  +"</b>"; 
    
    
}
if(cookiinfo=="cookie"){
     //show code block
      document.getElementById("hidecode6").style.display = "block";
      //cookie info
      document.getElementById('showinfo6').innerHTML="<b>" +navigator.cookieEnabled  +"</b>"; 
    
    
}
if(agentinfo=="userAgent"){
    
     //show code block
      document.getElementById("hidecode7").style.display = "block";
      //user agent
      document.getElementById('showinfo7').innerHTML="<b>" +navigator.userAgent  +"</b>"; 
    

}

}
//end fgiet function
