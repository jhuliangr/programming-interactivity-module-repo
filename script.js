/**
 * Mobile Navigation Toggle
 * Handles opening and closing of mobile navigation menu
 */

;(() => {
  // Get DOM elements
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")
  const navLinks = document.querySelectorAll(".nav-link")

  // Check if elements exist
  if (!mobileMenuToggle || !mainNav) {
    console.warn("Mobile menu elements not found")
    return
  }

  /**
   * Toggle mobile menu open/closed
   */
  function toggleMobileMenu() {
    const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true"

    // Toggle aria-expanded attribute
    mobileMenuToggle.setAttribute("aria-expanded", !isOpen)

    // Toggle is-open class on nav
    mainNav.classList.toggle("is-open")

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? "" : "hidden"
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "false")
    mainNav.classList.remove("is-open")
    document.body.style.overflow = ""
  }

  // Event listener for mobile menu toggle button
  mobileMenuToggle.addEventListener("click", toggleMobileMenu)

  // Close menu when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
      closeMobileMenu()
    }
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (mainNav.classList.contains("is-open") && !mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu()
    }
  })

  /**
   * Smooth scroll for anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // Skip if href is just "#"
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
