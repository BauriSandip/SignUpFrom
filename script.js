let SignUpBtn = document.querySelector(".signupbtn");
let SignInBtn = document.querySelector(".signinbtn");
let NameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let UnderLine = document.querySelector(".underline");
let text = document.querySelector(".text");

//hide name field
SignInBtn.addEventListener("click", () => {
  NameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Lost Password";
  SignUpBtn.classList.add("disable"); //button not disable
  SignInBtn.classList.remove("disable");

  UnderLine.style.transform = "translateX(30px)";
});

SignUpBtn.addEventListener("click", () => {
  NameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password Suggestion";
  SignUpBtn.classList.remove("disable"); //button not disable
  SignInBtn.classList.add("disable");

  UnderLine.style.transform = "translateX(0)";
});
