document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Add scroll effect to navbar
      const navbar = document.querySelector(".navbar-container");
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
      });

      // Hamburger menu toggle
      const hamburger = document.querySelector(".nav-hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });

      // Close menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target)) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });