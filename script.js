//your JS code here. If required.

	let btn=document.getElementById("btn")

btn.addEventListener("click",display)
async function display(){
	let textValue=document.getElementById("text").value
	let delayTime=document.getElementById("delay").value
	
	await new Promise((resolve)=>{
		setTimeout(resolve,delayTime);
	});

	document.getElementById("output").textContent = textValue;
}