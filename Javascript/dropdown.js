var dropdown = document.getElementsByClassName("dropdown-btn");
var submenu = document.getElementsByClassName("sub-menu");
var i;

for (i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var dropdowncontent = this.nextElementSibling;
        if (dropdowncontent.style.display === "flex"){
            dropdowncontent.style.display = "none";

        } else {
            dropdowncontent.style.display = "flex";
        }
    });
}