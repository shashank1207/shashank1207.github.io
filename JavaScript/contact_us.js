//
//var sub = document.getElementsByTagName("button")[0];
//console.log(sub);
//sub.onclick = addEventListener('click',function(){
//    var myEmail = document.getElementsByName("Email")[0].value;
//    var myNamr = document.getElementsByName("Full_name")[0].value;
//    var mySubject = document.getElementsByName("subject")[0].value;
//    var myMessage = document.getElementsByTagName("textarea")[0].value;
//    var myQuery = document.getElementsByTagName("textarea")[1].value;
//});
//    var myEmail = document.getElementsByName("Email")[0].value;
//    var myNamr = document.getElementsByName("Full_name")[0].value;
//    var mySubject = document.getElementsByName("subject")[0].value;
//    var myMessage = document.getElementsByTagName("textarea")[0].value;
//    var myQuery = document.getElementsByTagName("textarea")[1].value;
var submitting = function(){
    var myEmail = document.getElementsByName("Email")[0].value;
    var myName = document.getElementsByName("Full_name")[0].value;
    var mySubject = document.getElementsByName("subject")[0].value;
    var myMessage = document.getElementsByTagName("textarea")[0].value;
    var myQuery = document.getElementsByTagName("textarea")[1].value;
    console.log(myEmail);
    console.log(myName);
    console.log(mySubject);
    console.log(myMessage);
    console.log(myQuery);
    if(myEmail.indexOf('@')<=0){
        alert("Email is not valid. Make sure you're entering the valid E-mail address.");
        return false;
    }
    sessionStorage.setItem("Email", myEmail);
    sessionStorage.setItem("name", myName);
    sessionStorage.setItem("subject", mySubject);
    sessionStorage.setItem("message", myMessage);
    sessionStorage.setItem("query", myQuery);
    
    var res =  sessionStorage.getItem("subject");
    console.log(res);
};

var sub = document.getElementsByTagName("button")[0];
console.log(sub);
sub.onclick = submitting;