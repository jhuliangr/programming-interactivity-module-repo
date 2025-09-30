
;(() => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")
  const navLinks = document.querySelectorAll(".nav-link")

  if (!mobileMenuToggle || !mainNav) {
    console.warn("Mobile menu elements not found")
    return
  }

  function toggleMobileMenu() {
    const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true"

    mobileMenuToggle.setAttribute("aria-expanded", !isOpen)

    mainNav.classList.toggle("is-open")

    document.body.style.overflow = isOpen ? "" : "hidden"
  }

  function closeMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "false")
    mainNav.classList.remove("is-open")
    document.body.style.overflow = ""
  }

  mobileMenuToggle.addEventListener("click", toggleMobileMenu)

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
      closeMobileMenu()
    }
  })

  document.addEventListener("click", (e) => {
    if (mainNav.classList.contains("is-open") && !mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu()
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href === "#") {
        e.preventDefault()
        return
      }

      const target = document.querySelector(href)

      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})()
