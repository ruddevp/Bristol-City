function validateForm() {
		let x = document.forms["myForm"]["fnamefirst"].value;
		if (x == "") {
			alert("First name must be filled out");
			return false;
		}
		let y = document.forms["myForm"]["fnamelast"].value;
		if (y == "") {
			alert("Last Name must be filled out");
			return false;
		}
		let z = document.forms["myForm"]["subject"].value;
		if (z == "") {
			alert("Subject must be filled out");
			return false;
		}
	}