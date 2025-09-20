//your JS code here. If required.
let btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click",(e)=>{
	e.preventDefault();
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	alert(`Logged in as ${username}`);
	
	let checkbox=document.getElementById("checkbox");
if(checkbox.checked){
	
	localStorage.setItem("username","password");
	
}
	else{
		localStorage.clear();
		
	}
	if(localStorage.getItem("username"))
	{
		
		let existing=document.getElementById("existing");
		existing.textContent="Login as existing user";
		existing.addEventListener("click",()=>{
			alert(`Logged in as ${username}`);
		});
	}
});
