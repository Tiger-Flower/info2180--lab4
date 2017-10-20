
window.onload = function(){
	
var classname = document.querySelectorAll(".boundary");


for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mouseover', youLose);
}

document.getElementById('end').addEventListener('mouseover', youWin);
document.getElementById('start').addEventListener('click', restart);
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


function restart(){
	var boundaries = document.querySelectorAll(".boundary");
	for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.remove("youlose");
	}
}