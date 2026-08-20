function mainvalidation() {
    let userName = document.getElementById("usernameInput").value.trim();
    let userGender = document.querySelector('input[name="gender"]:checked');
    let userExperience = document.getElementById("experienceSelect").value;

    if (userName == "") {
        window.alert("Please enter your name");
        return false;
    }

    if (userGender) {
        userGender = userGender.value;
    } else {
        userGender = "Not specified";
    }

    if (userExperience == "") {
        window.alert("Please select your experience");
        return false;
    }

    console.log("Name:", userName);
    console.log("Experience:", userExperience);
    console.log("Gender:", userGender);

    localStorage.setItem("userName", userName);
    localStorage.setItem("userGender", userGender);
    localStorage.setItem("userExperience", userExperience);

    window.location.href = "F2.html"
    return true;
}

function F2validation() {
    let userGoal = document.querySelector('input[name="workout"]:checked');
    if (userGoal) {
        userGoal = userGoal.value;
    } else {
        window.alert("Please select your workout goal");
        return false;
    }

    if (userGoal == "Muscle Build") {
        window.location.href = "F3.1.html";
    }

    if (userGoal == "Fat Burn") {
       window.location.href = "F3.2.html";
    }

    if (userGoal == "Abs Exercise") {
        window.location.href = "F3.3.html";
    }

    if (userGoal == "Calisthenics") {
        window.location.href = "F3.4.html";
    }

    console.log("Workout Goal:", userGoal);

    localStorage.setItem("userGoal", userGoal);
}