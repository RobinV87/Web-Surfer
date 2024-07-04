document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var name = "Robin";
    var nameItem = document.getElementById('name-item');
    if (nameItem) {
      console.log("Element found:", nameItem);
      nameItem.textContent += name;
    } else {
      console.log("Element with id 'name-item' not found");
    }
  });