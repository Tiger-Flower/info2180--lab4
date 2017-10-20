window.onload = function(){
document.getElementById("boundary1").addEventListener("mouseover",youLose);
};

function youLose(){
		document.getElementById("boundary1").classList.add("youlose");
}
