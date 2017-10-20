
window.onload = function(){
var classname = document.querySelectorAll(".boundary");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mouseover', youLose);
}


};



function youLose(){
	var classname = document.querySelectorAll(".boundary");
	for (var i = 0; i < classname.length; i++) {
    classname[i].classList.add("youlose");
	}
}
