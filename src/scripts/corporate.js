
function showContent(sectionId) {
  // Hide all content sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => section.classList.remove("active"));

  // Remove active class from all sidebar items
  const sidebarItems = document.querySelectorAll(".sidebar ul li");
  sidebarItems.forEach((item) => item.classList.remove("active"));

  // Show the selected content section
  document.getElementById(sectionId).classList.add("active");

  // Add active class to the selected sidebar item
  event.target.classList.add("active");
}
