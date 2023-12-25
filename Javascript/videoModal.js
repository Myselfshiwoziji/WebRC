var button = document.getElementById("closeButtonModal");
var openModal = document.getElementById("openModal");

openModal.onclick = function(){
    document.getElementById("modalVideo").pause();
    document.getElementById("LectureVid").showModal();
}

openModal.onkeydown = function(event){
    if (event.key == " ") {
        document.getElementById("modalVideo").pause();
        document.getElementById("LectureVid").showModal();
    }
}

button.onclick = function(){
    document.getElementById("modalVideo").pause();
    document.getElementById("LectureVid").close();
}