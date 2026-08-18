document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.querySelector("button[type='button']");
  const nameInput = document.getElementById("userName");
  const genderSelect = document.getElementById("userGender");
  const experienceSelect = document.getElementById("userExperience");

  nextBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let gender = genderSelect.value;
    let experience = experienceSelect.value;

    if (name === "") {
      alert("⚠️ Please enter your name.");
      return;
    }

    if (gender === "") {
      gender = "Not specified";
    }

    if (experience === "") {
      alert("⚠️ Please select your experience level.");
      return;
    }
    window.location.href = "goals.html";
  });
});