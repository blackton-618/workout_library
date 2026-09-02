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
    const boxes = document.querySelectorAll('.box');
    const nextBtn = document.querySelector('.nextbtn');
    let userGoal = null;
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            boxes.forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
            userGoal = box.querySelector('img').alt;
            localStorage.setItem("userGoal", userGoal);
            console.log("Workout Goal:", userGoal);
        });
    });

    nextBtn.addEventListener('click', () => {
        if (userGoal=="Chest muscle") {
            window.location.href = "F3.1.1.html"; 
            return;
        }
        if (userGoal=="Lat muscle") {
            window.location.href = "F3.1.2.html"; 
            return;
        }
        if (userGoal=="Shoulder muscle") {
            window.location.href = "F3.1.3.html"; 
            return;
        }
        if (userGoal=="Triceps muscle") {
            window.location.href = "F3.1.4.html"; 
            return;
        }
        if (userGoal=="Biceps muscle") {
            window.location.href = "F3.1.5.html"; 
            return;
        }
        if (userGoal=="Back muscle") {
            window.location.href = "F3.1.6.html"; 
            return;
        }
        if (userGoal=="Leg muscle") {
            window.location.href = "F3.1.7.html"; 
            return;
        }
        if (userGoal=="Forearm muscle") {
           window.location.href = "F3.1.8.html"; 
            return;
        }
    });
}


document.querySelectorAll('.stopwatch-frame').forEach(frame => {
  let secDisplay = frame.querySelector('.seconds');
  let miniDisplay = frame.querySelector('.miniSeconds');
  let startBtn = frame.querySelector('.startBtn');
  let resetBtn = frame.querySelector('.resetBtn');

  let timer;
  let running = false;
  let seconds = 0;
  let miniSeconds = 0;

  function updateDisplay() {
    secDisplay.textContent = String(seconds).padStart(2, "0");
    miniDisplay.textContent = String(miniSeconds).padStart(2, "0");
  }

  function startStop() {
    if (!running) {
      running = true;
      startBtn.textContent = "Stop";
      timer = setInterval(() => {
        miniSeconds++;
        if (miniSeconds === 100) {
          miniSeconds = 0;
          seconds++;
        }
        updateDisplay();
      }, 10);
    } else {
      running = false;
      startBtn.textContent = "Start";
      clearInterval(timer);
    }
  }

  function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    miniSeconds = 0;
    updateDisplay();
    startBtn.textContent = "Start";
  }

  startBtn.addEventListener("click", startStop);
  resetBtn.addEventListener("click", reset);
});