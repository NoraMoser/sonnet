let Sonnet = document.getElementById("sonnet").innerText;

function myIndex(){
	let index = Sonnet.indexOf("orphans");
	console.log(index);
	let length = Sonnet.length;
	console.log(length);
	let winSwitch = Sonnet.replace("winter", "yuletide");
	document.getElementById("sonnet").innerHTML = winSwitch;
	let largeSwitch = winSwitch.replace(/ the /gi, " a large ");
	document.getElementById("sonnet").innerHTML = largeSwitch;
}

myIndex(Sonnet)