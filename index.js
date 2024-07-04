document.addEventListener("DOMContentLoaded", function() {
    var name = "Robin";
    document.getElementById('name-item').textContent += name;
  
    var currentYear = new Date().getFullYear();
    var age = currentYear - 1987;
    document.getElementById('age').textContent += age;
  });