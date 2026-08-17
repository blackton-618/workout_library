
function validation() {
    var username = document.getElementById("usernameInput").value.trim()
    var experience = document.getElementById("experienceSelect").value.trim()

    if (username == "") {
        window.alert("you have to enter your name")
        return false;
    }

    if (experience == "") {
        window.alert("you have select your experience")
        return false;
    }

    window.location.href = "goals.html"
    return true
}