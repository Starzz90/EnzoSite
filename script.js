function PROJECTS() {
  window.location.href = "https://github.com/Starzz90/MINI-PROJECTS.git";
}
function WEB() {
  window.location.href = "https://starzz90.github.io/Enzo-s-Quest/";
}
function CALC() {
  window.location.href = "https://starzz90.github.io/Webcalc./";
}
function GITHUB() {
  window.location.href = "https://github.com/Starzz90";
}
function EMAIL() {
  window.location.href = "mailto:enzodavidsontjen@gmail.com";
}
function SPOTIFY() {
  window.location.href =
    "https://open.spotify.com/user/5x18tquo4f6y6o3fi2eihkfzl";
}
window.onload = function () {
  window.scrollTo(0, 0);
};
function showMessage(title, text) {
  var modal = document.getElementById("custom-alert-modal");
  var modalTitle = document.getElementById("custom-alert-title");
  var modalText = document.getElementById("custom-alert-text");
  if (!modal || !modalTitle || !modalText) {
    alert(title + "\n\n" + text);
    return;
  }
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.classList.add("open");
}

function closeMessage() {
  var modal = document.getElementById("custom-alert-modal");
  if (modal) {
    modal.classList.remove("open");
  }
}

function PROJECTS() {
  window.location.href = "https://github.com/Starzz90/MINI-PROJECTS.git";
}
function WEB() {
  window.location.href = "https://starzz90.github.io/Enzo-s-Quest/";
}
function CALC() {
  window.location.href = "https://starzz90.github.io/Webcalc./";
}
function GITHUB() {
  window.location.href = "https://github.com/Starzz90";
}
function EMAIL() {
  window.location.href = "mailto:enzodavidsontjen@gmail.com";
}
function SPOTIFY() {
  window.location.href =
    "https://open.spotify.com/user/5x18tquo4f6y6o3fi2eihkfzl";
}
function CONTACT(){
  window.location.href =
  "https://www.linkedin.com/in/enzo-davidson-tjen-25b168354/";
}
function myPYTHON() {
  showMessage(
    "A comment from the developer",
    "Python is the first language that I learned when I started programming. Even though nowadays I rarely use it, I aim to practice it more in the future and use it for my upcoming projects.",
  );
}
function myHTML() {
  showMessage(
    "A comment from the developer",
    "HTML is the language that I think is not that complicated, though it may be problematic sometimes.",
  );
}
function myCSS() {
  showMessage(
    "A comment from the developer",
    "CSS is a language that i fell in love with due to my lkiking for design and art. This language enables me to fully embrace my liking in a coding format.",
  );
}
function myJS() {
  showMessage(
    "A comment from the developer",
    "Javascript is a language that i find difficult to grasp likely due to how its structured. But i'm aiming to mastering it in the future due to its flexibility and wide range of use cases.",
  );
}
function myTailwind() {
  showMessage(
    "A comment from the developer",
    "Tailwind CSS is the newest language that i learned, it's very practical and convinient. The only thing that i dislike about it is how complicated the installation process is.",
  );
}
function myPHP() {
  showMessage(
    "A comment from the developer",
    "PHP is a language that i find very interesting even though many despise it due to its difficulty. PHP has helped me elevate my overall web dev abilities and i will continue to improve in it and its very enjoyable for me who prioritize user interface.",
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var pyLink = document.getElementById("python-link");
  if (pyLink) {
    pyLink.addEventListener("click", function (e) {
      e.preventDefault();
      myPYTHON();
    });
  }
  var htmlLink = document.getElementById("html-link");
  if (htmlLink) {
    htmlLink.addEventListener("click", function (e) {
      e.preventDefault();
      myHTML();
    });
  }
  var cssLink = document.getElementById("css-link");
  if (cssLink) {
    cssLink.addEventListener("click", function (e) {
      e.preventDefault();
      myCSS();
    });
  }
  var jsLink = document.getElementById("js-link");
  if (jsLink) {
    jsLink.addEventListener("click", function (e) {
      e.preventDefault();
      myJS();
    });
  }
  var tailwindLink = document.getElementById("Tailwind-link");
  if (tailwindLink) {
    tailwindLink.addEventListener("click", function (e) {
      e.preventDefault();
      myTailwind();
    });
  }
  var tailwindLink = document.getElementById("PHP-link");
  if (tailwindLink) {
    tailwindLink.addEventListener("click", function (e) {
      e.preventDefault();
      myPHP();
    });
  }

  var closeButton = document.getElementById("custom-alert-close");
  if (closeButton) {
    closeButton.addEventListener("click", closeMessage);
  }

  // Sidebar toggle functionality
  var moreBtn = document.getElementById("more-btn");
  var sidebar = document.getElementById("sidebar");

  if (moreBtn) {
    moreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.toggle("visible");
    });
  }


  var sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("visible");
    });
  });


  document.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && e.target !== moreBtn) {
      sidebar.classList.remove("visible");
    }
  });
});

const phrases = [
  "Junior.Developer || 17.years.old",
  "National.Olympiad.Medalist",
  "Web.Developer",
  "Resilience.Over.Talent",
  "Tech.Enthusiast",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_AFTER = 2000;
const PAUSE_BEFORE = 500;
const typingEl = document.querySelector(".typing");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingEl) return;

  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typingEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, PAUSE_AFTER);
      return;
    }
    setTimeout(type, TYPING_SPEED);
  } else {
    typingEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, PAUSE_BEFORE);
      return;
    }
    setTimeout(type, DELETING_SPEED);
  }
}

document.addEventListener("DOMContentLoaded", type);
