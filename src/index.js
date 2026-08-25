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
    console.log("Workout Goal:", userGoal);

    localStorage.setItem("userGoal", userGoal);
}

const timers = [
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null },
    { seconds: 0, interval: null }
];

function toggleTimer(index, displayId, buttonId) {
    const timer = timers[index];
    const display = document.getElementById(displayId);
    const button = document.getElementById(buttonId);

    if (timer.interval !== null) {
        clearInterval(timer.interval);
        timer.interval = null;
        button.textContent = "Start";
        return;
    }

    timer.interval = setInterval(() => {
        timer.seconds++;
        const minutes = Math.floor(timer.seconds / 60).toString().padStart(2, "0");
        const seconds = (timer.seconds % 60).toString().padStart(2, "0");
        display.textContent = `${minutes}:${seconds}`;
    }, 1000);

    button.textContent = "Stop";
}

function resetTimer(index, displayId, buttonId) {
    clearInterval(timers[index].interval);
    timers[index].seconds = 0;
    timers[index].interval = null;
    document.getElementById(displayId).textContent = "00:00";
    document.getElementById(buttonId).textContent = "Start";
}

function stratstop() {
    toggleTimer(0, "display", "btn");
}

function reset() {
    resetTimer(0, "display", "btn");
}

function stratstop2() {
    toggleTimer(1, "display2", "btn2");
}

function reset2() {
    resetTimer(1, "display2", "btn2");
}

function stratstop3() {
    toggleTimer(2, "display3", "btn3");
}

function reset3() {
    resetTimer(2, "display3", "btn3");
}

function stratstop4() {
    toggleTimer(3, "display4", "btn4");
}

function reset4() {
    resetTimer(3, "display4", "btn4");
}

function stratstop5() {
    toggleTimer(4, "display5", "btn5");
}

function reset5() {
    resetTimer(4, "display5", "btn5");
}

function stratstop6() {
    toggleTimer(5, "display6", "btn6");
}

function reset6() {
    resetTimer(5, "display6", "btn6");
}

function stratstop7() {
    toggleTimer(6, "display7", "btn7");
}

function reset7() {
    resetTimer(6, "display7", "btn7");
}

function stratstop8() {
    toggleTimer(7, "display8", "btn8");
}

function reset8() {
    resetTimer(7, "display8", "btn8");
}

function stratstop9() {
    toggleTimer(8, "display9", "btn9");
}

function reset9() {
    resetTimer(8, "display9", "btn9");
}

function stratstop10() {
    toggleTimer(9, "display10", "btn10");
}

function reset10() {
    resetTimer(9, "display10", "btn10");
}


