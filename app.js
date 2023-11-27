const signUp = document.getElementById("signUp");
const logIn = document.getElementById("logIn");
const swapBg = document.getElementById("swapBg");
const welcomeText = document.querySelector(".welcome-text");
const signBtn = document.getElementById("signBtn");
const logBtn = document.getElementById("logBtn");

/* Form swap functions */

function leftSwap() {
  logIn.style.left = "2vw";
  signUp.style.left = "34vw";
  swapBg.style.left = "152px";
  welcomeText.innerHTML = "Welcome Back !";
  logBtn.style.color = "black";
  signBtn.style.color = "white";
}

function rightSwap() {
  logIn.style.left = "34vw";
  signUp.style.left = "2vw";
  swapBg.style.left = "0px";
  welcomeText.innerHTML = "Sign Up For Free";
  logBtn.style.color = "white";
  signBtn.style.color = "black";
}

/* Form swap fonctions end */

/* Form validations */

const form1 = document.getElementById("signUp");

function formElementValidateF(formElement) {
  if (!formElement.checkValidity()) {
    formElement.closest("input").classList.add("error");

    if (formElement.nextElementSibling?.className !== "error-msg") {
      const error = document.createElement("small");
      error.className = "error-msg";
      error.innerText = "*" + formElement.validationMessage;
      formElement.insertAdjacentElement("afterend", error);
    } else {
      formElement.nextElementSibling.innerHTML = formElement.validationMessage;
    }
  } else {
    if (formElement.nextElementSibling?.className === "error-msg") {
      formElement.nextElementSibling.remove();
      formElement.closest("input").classList.remove("error");
    }
  }
}

[...form1.elements].forEach((formElement) => {
  ["change", "keyup"].forEach((method) => {
    formElement.addEventListener(method, () => {
      formElementValidateF(formElement);
    });
  });
});

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  [...this.elements].forEach((formElement) => {
    formElementValidateF(formElement);
  });

  if (this.checkValidity()) {
    console.log("tum form dolu");
  }
});

/* Form 2  */

const form2 = document.getElementById("logIn");

function form2ElementValidateF(loginElement) {
  if (!loginElement.checkValidity()) {
    loginElement.closest("input").classList.add("error");

    if (loginElement.nextElementSibling?.className !== "error-msg") {
      const error = document.createElement("small");
      error.className = "error-msg";
      error.innerText = "*" + loginElement.validationMessage;
      loginElement.insertAdjacentElement("afterend", error);
    } else {
      loginElement.nextElementSibling.innerHTML =
        loginElement.validationMessage;
    }
  } else {
    if (loginElement.nextElementSibling?.className === "error-msg") {
      loginElement.nextElementSibling.remove();
      loginElement.closest("input").classList.remove("error");
    }
  }
}

[...form2.elements].forEach((loginElement) => {
  ["change", "keyup"].forEach((method) => {
    loginElement.addEventListener(method, () => {
      form2ElementValidateF(loginElement);
    });
  });
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  [...this.elements].forEach((loginElement) => {
    form2ElementValidateF(loginElement);
  });

  if (this.checkValidity()) {
    console.log("tum form dolu");
  }
});
