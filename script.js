let btnSubmit = document.getElementById("submit");
let existing = document.getElementById("existing");

// check storage on page load
let savedUser = localStorage.getItem("username");
if (savedUser) {
	existing.style.display = "block";
	existing.addEventListener("click", () => {
		alert(`Logged in as ${savedUser}`);
	});
}

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	alert(`Logged in as ${username}`);

	let checkbox = document.getElementById("checkbox");

	if (checkbox.checked) {
		// use fixed keys instead of username as key
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		// only remove our items (not clear all storage)
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
});
