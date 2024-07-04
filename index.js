document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var name = "Robin Versloot";
    var nameElement = document.getElementById('name-item');
    if (nameElement) {
        console.log("Name element found");
        nameElement.textContent += name;
    } else {
        console.log("Name element not found");
    }

    var currentYear = new Date().getFullYear();
    var age = currentYear - 1987;
    var ageElement = document.getElementById('age');
    if (ageElement) {
        console.log("Age element found");
        ageElement.textContent += age;
    } else {
        console.log("Age element not found");
    }

    var email = "robin@robinversloot.nl"
    var emailElement = document.getElementById('email');
    if (emailElement) {
        console.log("E-mail element found");
        emailElement.textContent += email;
    } else {
        console.log("Email element not found");
    }
});