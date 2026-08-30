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

// Create stopwatch objects for each workout
const stopwatches = {};

function createStopwatch(id) {
  return {
    timer: null,
    running: false,
    seconds: 0,
    miniSeconds: 0,
    secDisplay: document.getElementById("seconds" + id),
    miniDisplay: document.getElementById("miniSeconds" + id),
    startBtn: document.getElementById("startBtn" + id),
    resetBtn: document.getElementById("resetBtn" + id),
    
    updateDisplay() {
      this.secDisplay.textContent = String(this.seconds).padStart(2, "0");
      this.miniDisplay.textContent = String(this.miniSeconds).padStart(2, "0");
    },
    
    startStop() {
      if (!this.running) {
        this.running = true;
        this.startBtn.textContent = "Stop";
        this.timer = setInterval(() => {
          this.miniSeconds++;
          if (this.miniSeconds === 100) {
            this.miniSeconds = 0;
            this.seconds++;
          }
          this.updateDisplay();
        }, 10);
      } else {
        this.running = false;
        this.startBtn.textContent = "Start";
        clearInterval(this.timer);
      }
    },
    
    reset() {
      clearInterval(this.timer);
      this.running = false;
      this.seconds = 0;
      this.miniSeconds = 0;
      this.updateDisplay();
      this.startBtn.textContent = "Start";
    }
  };
}

// Initialize all stopwatches
for (let i = 1; i <= 5; i++) {
  stopwatches[i] = createStopwatch(i);
  stopwatches[i].startBtn.addEventListener("click", () => stopwatches[i].startStop());
  stopwatches[i].resetBtn.addEventListener("click", () => stopwatches[i].reset());
}
