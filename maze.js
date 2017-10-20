
window.onload = function(){
	
var classname = document.querySelectorAll(".boundary");


for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mouseover', youLose);
}

document.getElementById('end').addEventListener('mouseover', youWin);

};



function youLose(){
	var classname = document.querySelectorAll(".boundary");
	for (var i = 0; i < classname.length; i++) {
    classname[i].classList.add("youlose");
	}
}



function youWin(){
	var q =document.getElementsByClassName('youlose');
	if(q.length == 0)
		alert( "You win!");
}