function validateForm(e) {
    // Hides all error elements on the page
    hideErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();
        return false;
    }

    // When using onSubmit="validateForm()" in markup, returning true would allow
    // the form to submit
    return true;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
    let errorFlag = false;

    // Validate name
    const name = document.getElementById("name");
    if (name.value.trim() == "") {
        document.getElementById("name-error").style.display = "block";
        name.focus();
        errorFlag = true;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    // Validate phone number
    const phone = document.getElementById("phone");
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("phone-error").style.display = "block";
        phone.focus();
        errorFlag = true;
    } else {
        document.getElementById("phone-error").style.display = "none";
    }

    // Validate email
    const email = document.getElementById("email");
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (email.value.trim() === "") {
        document.getElementById("email-error").style.display = "block";
        email.focus();
        errorFlag = true;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById("email-error").style.display = "block";
        email.focus();
        errorFlag = true;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    // Validate comments
    const comments = document.getElementById("comments");
    if (comments.value.trim() == "") {
        document.getElementById("comments-error").style.display = "block";
        comments.focus();
        errorFlag = true;
    } else {
        document.getElementById("comments-error").style.display = "none";
    }

    return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error-message");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting its display style to "none"
        error[i].style.display = "none";
    }
}

/*
 * Handles the load event of the document.
 */
function load() {
    // Add event listener for the form submit
    document.getElementById("contactform").addEventListener("submit", validateForm);

    // Add event listener for the form reset
    document.getElementById("contactform").addEventListener("reset", hideErrors);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
