
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : currentTheme === "ice" ? "dark" : "ice";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    const moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';
    const iceSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snowflake-icon lucide-snowflake"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></svg>';
    themeToggle.innerHTML = newTheme === "dark" ? sunSvg : newTheme === "ice" ? iceSvg : moonSvg;
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    const moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';
    const iceSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snowflake-icon lucide-snowflake"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></svg>';
    themeToggle.innerHTML = currentTheme === "dark" ? sunSvg : currentTheme === "ice" ? iceSvg : moonSvg;
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

// Initialize theme on page load and scroll to top
window.onload = function () {
  initTheme();
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
function CONTACT() {
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

function lightMode() {
  document.getElementById("body").classList.toggle("light-mode");
}
