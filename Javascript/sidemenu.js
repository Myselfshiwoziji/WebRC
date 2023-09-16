document.addEventListener("DOMContentLoaded", function() {
    // Load the header HTML file
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "menu.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insert the header HTML into the page
        const header = xhr.responseText;
        const headerElement = document.getElementById("main_side")
        headerElement.innerHTML = header;
      }
    };
    xhr.send();
    dropping_time();
});

function openNav() {
    document.getElementById("main_side").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("main_side").style.width = "0";
}