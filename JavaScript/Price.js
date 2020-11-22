//
//var sub = document.getElementById("button");
//console.log(sub);
//sub.onClick = addEventListener('click',function(){
//     var inp = document.getElementsByClassName("calcu")[0].getElementsByTagName("input")[0].value;
//    
//    console.log(inp);
//
//    var out = document.getElementById("output");
//
//    out.innerHTML = "That will be " + inp*5 + "$.";
//});


var calculate = function(){
    var inp = document.getElementsByClassName("calcu")[0].getElementsByTagName("input")[0].value;
    var a = parseInt(inp);
    console.log(inp);

    var out = document.getElementById("output");
    var p = a*5;
    if (isNaN(p)){
        out.innerHTML = "Please input valid quantity."
    }
    else{
        out.innerHTML = "That will be " + p + "$.";
    }
};


var sub = document.getElementById("button");
console.log(sub);
sub.onclick = calculate;