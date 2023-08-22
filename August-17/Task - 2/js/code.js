
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});


closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});