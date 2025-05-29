function validateForm() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    if (name === "" || gender === "") {
        alert("Veuillez remplir tous les champs obligatoires !");
        return false;
    }
    return true;
}

function changeTheme() {
    let gender = document.getElementById("gender").value;
    if (gender === "male") {
        document.body.style.backgroundColor = "green";
    } else if (gender === "female") {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "#f4f4f4";
    }
}