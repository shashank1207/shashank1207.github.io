//document.getElementsByClassName("About_Our_staff")[1].addEventListener('click',function(){
//    document.getElementsByClassName("main-container")[0].style.display='flex';
//});
//document.getElementsByClassName("close")[0].addEventListener('click', function(){
//    document.getElementsByClassName("main-container")[0].style.display='none';
//}

var list1 = document.getElementsByClassName("clickable");

console.log(list1);


for(var i=0;i<list1.length;i++){
    
    list1[i].onclick = function(){
        var id = this.id;
        var pop_up = document.getElementsByClassName("main-container")[0];
        pop_up.getElementsByTagName("img")[0].src = document.getElementById(id).getElementsByTagName("img")[0].src;
        var data;
        fetch("https://www.breakingbadapi.com/api/characters/" + id).then(function(val){
           return val.json();
        }).then(function(data){
            document.getElementsByClassName("pop")[0].getElementsByTagName("h1")[0].innerHTML = data[0].name;
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[0].innerHTML = data[0].birthday;
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[1].innerHTML = data[0].occupation.join(', ');
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[2].innerHTML = data[0].status;
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[3].innerHTML = data[0].portrayed;
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[4].innerHTML = data[0].nickname;
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[5].innerHTML = data[0].appearance.join(', ');
            document.getElementsByClassName("descrip")[0].getElementsByTagName("p")[6].innerHTML = data[0].better_call_saul_appearance.join(', ');
            pop_up.style.display='flex';
        });
        
    }
};
document.getElementsByClassName("close")[0].addEventListener('click', function(){
    document.getElementsByClassName("main-container")[0].style.display='none';
});