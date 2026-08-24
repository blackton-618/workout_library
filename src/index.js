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
   if (!userGoal) {
        window.alert("Please select your workout goal");
        return false;
    }
    userGoal = userGoal.value;
    console.log("Workout Goal:", userGoal);
    localStorage.setItem("userGoal", userGoal);

    if (userGoal == "Muscle Build") {
        window.location.href = "F3.1.html";
        return;
    }

    if (userGoal == "Fat Burn") {
       window.location.href = "F3.2.html";
       return;
    }

    if (userGoal == "Abs Exercise") {
        window.location.href = "F3.3.html";
        return;
    }

    if (userGoal == "Calisthenics") {
        window.location.href = "F3.4.html";
        return;
    }
}

function exerciseSelection() {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', () => {
            document.querySelectorAll('.box').forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
        });
    });
}
