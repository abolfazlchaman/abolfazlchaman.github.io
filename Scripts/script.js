//loader
window.addEventListener("load", function () {
  scrollHandler();
  seperatorsHandler();
  picsHandler();
  if (!themeFlag) {
    //Dark Theme
    $.getElementsByClassName("theme__btn")[0].classList.replace("justifyend", "justifystart");
    $.getElementsByClassName("theme__btn")[0].classList.replace("indent", "outdent");
  } else {
    $.getElementsByClassName("theme__btn")[0].classList.replace("justifystart", "justifyend");
    $.getElementsByClassName("theme__btn")[0].classList.replace("outdent", "indent");
  }
  // $.body.attributes.removeNamedItem("hidden")
  $.body.classList.remove("loader");
});

//offline check
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

//online check
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

let childs = $.getElementById("nav__arrow").children;

const lineImg = $.getElementById("line"),
  lineImg2 = $.getElementById("line2"),
  circleImg = $.getElementById("circle"),
  // logo = $.getElementsByClassName("logo")[0],
  hand = $.getElementsByClassName("hand"),
  handSource = $.getElementsByClassName("handSource");

function picsHandler() {
  if (!themeFlag) {
    // logo.classList.add("nobrightness");
    lineImg.setAttribute("src", "/images/blackline.png");
    lineImg2.setAttribute("src", "/images/blackline.png");
    circleImg.setAttribute("src", "/images/blackcircle.png");
    hand[0].setAttribute("src", "/images/blackhand.png");
    hand[1].setAttribute("src", "/images/blackhand.png");
    handSource[0].setAttribute("srcset", "/images/blackhand.webp");
    handSource[1].setAttribute("srcset", "/images/blackhand.webp");
  } else {
    // logo.classList.remove("nobrightness");
    lineImg.setAttribute("src", "/images/line.png");
    lineImg2.setAttribute("src", "/images/line.png");
    circleImg.setAttribute("src", "/images/circle.png");
    hand[0].setAttribute("src", "/images/whitehand.png");
    hand[1].setAttribute("src", "/images/whitehand.png");
    handSource[0].setAttribute("srcset", "/images/whitehand.webp");
    handSource[1].setAttribute("srcset", "/images/whitehand.webp");
  }
}

const seprator = $.getElementsByClassName("seprator");
function seperatorsHandler() {
  for (let i = 0; i < seprator.length; i += 1) {
    if (!themeFlag) {
      seprator[i].setAttribute("src", "/images/blackseprator.png");
    } else {
      seprator[i].setAttribute("src", "/images/seprator.png");
    }
  }
}

$.getElementsByClassName("theme__btn")[0].addEventListener(("touchstart", "click"), themeHandler);

function navDentHandler() {
  for (let i = 0; i < childs.length; i++) {
    childs[i].classList.replace("outdent", "indent");
  }
}

let xScrollOffset = +0;
const homeSection = $.getElementById("home"),
  aboutMeSection = $.getElementById("aboutme"),
  skillsSection = $.getElementById("skills"),
  servicesSection = $.getElementById("services"),
  worksSection = $.getElementById("works"),
  contactSection = $.getElementById("contact");
function scrollHandler() {
  xScrollOffset = +window.pageYOffset || +document.documentElement.scrollTop;

  if (xScrollOffset <= homeSection.offsetTop + 50) {
    navDentHandler();
    childs[0].classList.replace("indent", "outdent");
  } else if (xScrollOffset <= aboutMeSection.offsetTop + 50) {
    navDentHandler();
    childs[1].classList.replace("indent", "outdent");
  } else if (xScrollOffset <= skillsSection.offsetTop + 50) {
    navDentHandler();
    childs[2].classList.replace("indent", "outdent");
  } else if (xScrollOffset <= servicesSection.offsetTop + 50) {
    navDentHandler();
    childs[3].classList.replace("indent", "outdent");
  } else if (xScrollOffset <= worksSection.offsetTop + 50) {
    navDentHandler();
    childs[4].classList.replace("indent", "outdent");
  } else if (xScrollOffset >= contactSection.offsetTop - 500) {
    navDentHandler();
    childs[5].classList.replace("indent", "outdent");
  }
}

for (let i = 0; i < childs.length; i++) {
  childs[i].addEventListener(("touchstart", "click"), function () {
    childs[i].classList.replace("outdent", "indent");

    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.replace("outdent", "indent");
    }
    childs[i].classList.replace("indent", "outdent");
  });
}

let skillsBtn = $.getElementsByClassName("skills__btn");
for (let i = 0; i < skillsBtn.length; i++) {
  skillsBtn[i].addEventListener(("touchstart", "click"), function () {
    skillsBtn[i].classList.replace("outdent", "indent");

    for (let i = 0; i < skillsBtn.length; i++) {
      skillsBtn[i].classList.replace("outdent", "indent");
      skillsBtn[i].classList.remove("blueBg");
    }
    skillsBtn[i].classList.replace("indent", "outdent");
    skillsBtn[i].classList.toggle("blueBg");
    skillsContentHandler();
  });
}

let skillsContent = $.getElementsByClassName("skills__lang");
function skillsContentHandler() {
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].setAttribute("hidden", "");
  }

  if (skillsBtn[0].classList.contains("outdent")) {
    skillsContent[0].removeAttribute("hidden");
    skillsContent[1].removeAttribute("hidden");
    skillsContent[7].removeAttribute("hidden");
    skillsContent[8].removeAttribute("hidden");
    skillsContent[9].removeAttribute("hidden");
  }
  if (skillsBtn[1].classList.contains("outdent")) {
    skillsContent[2].removeAttribute("hidden");
  }
  if (skillsBtn[2].classList.contains("outdent")) {
    skillsContent[3].removeAttribute("hidden");
    skillsContent[10].removeAttribute("hidden");
  }
  if (skillsBtn[3].classList.contains("outdent")) {
    skillsContent[4].removeAttribute("hidden");
    skillsContent[5].removeAttribute("hidden");
  }
  if (skillsBtn[4].classList.contains("outdent")) {
    skillsContent[6].removeAttribute("hidden");
  }
}

const workExp = $.getElementsByClassName("workexp"),
  workBtn = $.getElementsByClassName("workbtn");
workBtn[0].addEventListener(("touchstart", "click"), function () {
  workBtnHandler();
  workBtn[0].classList.add("outdent");
  workExp[0].setAttribute("hidden", "");
  workExp[1].setAttribute("hidden", "");
  workExp[2].setAttribute("hidden", "");
  workExp[3].setAttribute("hidden", "");
  workExp[4].setAttribute("hidden", "");
  workExp[5].setAttribute("hidden", "");
  workExp[6].setAttribute("hidden", "");
  workExp[7].setAttribute("hidden", "");
  workExp[8].removeAttribute("hidden", "");
  workExp[9].removeAttribute("hidden", "");
  workExp[10].removeAttribute("hidden", "");
});
workBtn[1].addEventListener(("touchstart", "click"), function () {
  workBtnHandler();
  workBtn[1].classList.add("outdent");
  workExp[0].removeAttribute("hidden", "");
  workExp[1].removeAttribute("hidden", "");
  workExp[2].removeAttribute("hidden", "");
  workExp[3].removeAttribute("hidden", "");
  workExp[4].removeAttribute("hidden", "");
  workExp[5].removeAttribute("hidden", "");
  workExp[6].removeAttribute("hidden", "");
  workExp[7].removeAttribute("hidden", "");
  workExp[8].setAttribute("hidden", "");
  workExp[9].setAttribute("hidden", "");
  workExp[10].setAttribute("hidden", "");
});
function workBtnHandler() {
  workBtn[0].classList.remove("outdent");
  workBtn[0].classList.add("indent");
  // workExp[0].removeAttribute('hidden');
  workBtn[1].classList.remove("outdent");
  workBtn[1].classList.add("indent");
  // workExp[1].removeAttribute('hidden');
  // workExp[2].removeAttribute('hidden');
}

$.addEventListener("scroll", function name() {
  behavior: "smooth";
  scrollHandler();
});

function themeHandler() {
  if (themeFlag) {
    //Dark Theme
    themeFlag = false;
    $.getElementsByClassName("theme__btn")[0].classList.replace("justifyend", "justifystart");
    $.getElementsByClassName("theme__btn")[0].classList.replace("indent", "outdent");
    styleSheet.setAttribute("href", "/styles/white.css");
    localStorage.setItem("theme", "light");
    colorScheme.setAttribute("content", "light");
    $.getElementById("icon1").setAttribute("data-icon", "bi:moon-stars");
  } else {
    //Light Theme
    themeFlag = true;
    $.getElementsByClassName("theme__btn")[0].classList.replace("justifystart", "justifyend");
    $.getElementsByClassName("theme__btn")[0].classList.replace("outdent", "indent");
    styleSheet.setAttribute("href", "/styles/dark.css");
    localStorage.setItem("theme", "dark");
    colorScheme.setAttribute("content", "dark");
    $.getElementById("icon1").setAttribute("data-icon", "heroicons-outline:sun");
  }
  seperatorsHandler();
  picsHandler();
}
// Function to convert Gregorian year to Persian year
function getPersianYear() {
  const currentDate = new Date();
  const gregorianYear = currentDate.getFullYear();
  const persianYear = gregorianYear - 621; // Approximate conversion
  return persianYear;
}

// Function to convert English digits to Persian digits
function convertToPersianDigits(number) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number
    .toString()
    .split('')
    .map((digit) => persianDigits[parseInt(digit, 10)])
    .join('');
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Set the Persian year in the footer with Persian digits
  const persianYear = getPersianYear();
  const persianYearElement = document.getElementById('current-year');
  if (persianYearElement) {
    persianYearElement.textContent = convertToPersianDigits(persianYear);
  }

  // Set the English year in the footer
  const englishYearElement = document.getElementById('current-year-en');
  if (englishYearElement) {
    englishYearElement.textContent = new Date().getFullYear();
  }
});