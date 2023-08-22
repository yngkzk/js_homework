function filterInput(input) {
    input.value = input.value.replace(/\d/g, '');
}

function validateForm() {
    var username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Введите имя пользователя");
        return false;
    }
    return true;
}
