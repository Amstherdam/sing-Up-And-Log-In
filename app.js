const signUp = document.getElementById("signUp");
const logIn = document.getElementById("logIn");
const swapBg = document.getElementById("swapBg");
const welcomeText = document.querySelector('.welcome-text')
const signBtn = document.getElementById('signBtn')
const logBtn = document.getElementById('logBtn')


/* Form swap functions */

function leftSwap() {
  logIn.style.left = "2vw";
  signUp.style.left = "34vw";
  swapBg.style.left = "152px";
  welcomeText.innerHTML = 'Welcome Back !'
  logBtn.style.color = 'black'
  signBtn.style.color = 'white'
}

function rightSwap() {
  logIn.style.left = "34vw";
  signUp.style.left = "2vw";
  swapBg.style.left = "0px";
  welcomeText.innerHTML = 'Sign Up For Free'
  logBtn.style.color = 'white'
  signBtn.style.color = 'black'
}

/* Form swap fonctions end */

/* Form validations */




