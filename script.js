document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Interactive Gallery Filter Buttons (if applicable)
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // 3. Simple Login Button Interactivity
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Login portal modal coming soon!");
    });
  }
});













// about
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for About Us Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Interactive Feature: Log a click event on mission/vision/core-value boxes
  const valueBoxes = document.querySelectorAll(".value-box");
  valueBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      const title = this.querySelector("h3").innerText;
      console.log(`User clicked on: ${title}`);
    });
  });

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});








// academic
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for Academics Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Interactive Resource Item Click Handler
  const resourceItems = document.querySelectorAll(".resource-item");
  resourceItems.forEach((item) => {
    item.addEventListener("click", function () {
      const resourceName = this.querySelector("h4").innerText;
      alert(`Accessing ${resourceName}... Please wait.`);
    });
  });

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});





// admission page
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for Admissions Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Interactive Action Buttons Click Handler
  const applyBtn = document.querySelector(".btn-apply-now");
  if (applyBtn) {
    applyBtn.addEventListener("click", function (e) {
      // Uncomment the line below if you want to prevent direct navigation for a popup modal action
      // e.preventDefault();
      alert("Redirecting to Springdale Online Application Portal...");
    });
  }

  const tourBtn = document.querySelector(".btn-schedule-tour");
  if (tourBtn) {
    tourBtn.addEventListener("click", function (e) {
      // e.preventDefault();
      alert("Opening School Tour Booking Form...");
    });
  }

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});






// gallery
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for Gallery Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Interactive Gallery Filter Buttons Functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and add to the clicked one
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.innerText.toLowerCase();

      // Filter gallery items based on caption text or category
      galleryItems.forEach((item) => {
        const caption = item.querySelector(".gallery-caption").innerText.toLowerCase();
        const isVideo = item.querySelector(".video-item") !== null;

        if (filterValue === "all") {
          item.style.display = "flex";
        } else if (filterValue === "videos" && isVideo) {
          item.style.display = "flex";
        } else if (caption.includes(filterValue)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});





// contact
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for Contact Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Contact Form Submission Handler
  const contactForm = document.querySelector(".message-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent successfully to Springdale International School.");
      contactForm.reset();
    });
  }

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});










// mandatory
document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Active Navbar Highlighting for Mandatory Disclosure Page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. View Documents & Video Button Action Handler
  const viewDocButtons = document.querySelectorAll(".view-doc-btn");
  viewDocButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const buttonText = this.innerText;
      if (buttonText.includes("VIDEO")) {
        alert("Opening Springdale School Infrastructure Video...");
      } else {
        alert("Opening requested disclosure document PDF...");
      }
    });
  });

  // 3. Login Button Action
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Opening Springdale Portal Login...");
    });
  }
});












document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }
});