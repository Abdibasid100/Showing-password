const Pass = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");

eyeicon.addEventListener("click", () => {
  if (Pass.type == "password") {
    Pass.type = "text";
    eyeicon.src = "images/eye-open.png";
  } else {
    Pass.type = "password";
    eyeicon.src = "images/eye-close.png";
  }
});
