function loginUser() {
	// Get the form inputs
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;

	// Check the credentials
	if (username === "dipanshgarg" && password === "qwerty99") {
		// Redirect to the home page
		window.location.href = "user1.html";
		return false; // Prevent the form from submitting
	}

	else if (username === "architgarg" && password === "archit29") {
		// Redirect to the home page
		window.location.href = "user2.html";
		return false; // Prevent the form from submitting
	}
    
    else {
		// Display an error message
		alert("Incorrect username or password");
		return false; // Prevent the form from submitting
	}
}

loginUser();