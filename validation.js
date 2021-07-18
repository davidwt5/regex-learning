// validation script here

// Get the collection of all input fields
const inputs = document.querySelectorAll("input");

// Note that the name of each key corresponds to the name field of the HTML element
// This is important because the HTML name field is used to select the appropriate regex
const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    // Email is notoriously hard to validate. This is just a simple version.
    email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]+(\.[a-z]+)*$/i, 
    password: /^[\w@-]{8,20}$/, 
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}

// Checks whether a field's value matches a regex and
// assigns a valid/invalid class depending on whether it matched
function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

// Adds an event listener to every input field
// Calls the validate function everytime the user enters a key in a field
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});