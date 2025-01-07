
// Script to handle academic dropdown
const academic = document.getElementById("academics");
academic.addEventListener("click", () => {
  const dropdown = `<div class = 'absolute left-0 top-9 mt-2 w-max space-x-20 space-y-20 flex flex-col items-center justify-center text-black'>
<ul class = 'flex flex-col'>
<li class = 'p-2 text-center border-gray-300 border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white'> <a href = ${"./PG.php"}>PG Course</a></li>
<li class = 'p-2 text-center border-gray-300 border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white'><a href = ${"./UG.php"}>UG Course</a></li>
<li class = 'p-2 text-center border-gray-300 border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white'><a href = ${"./Diploma.php"}>Diploma Course</a></li>
</ul>
</div>`;

  const existingDropdown = academic.querySelector(".dropdown");
  if (existingDropdown) {
    existingDropdown.remove(); // Remove if it exists
  } else {
    const menu = document.createElement("div");
    menu.classList.add("dropdown"); // Add a class to identify it
    menu.innerHTML = dropdown;
    academic.appendChild(menu);
  }
});

// Script to handle drawer toogle
const menuBtn = document.getElementById("menu-btn");
const drawer = document.getElementById("drawer");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  drawer.classList.add("hidden");
});

//Script for handling academics dropdown menu
const academicsDropdown = document.getElementById("academicsDropdown");
const academicsMenu = document.getElementById("academicsMenu");

// Toggle Academics Dropdown
academicsDropdown.addEventListener("click", () => {
  if (academicsMenu.classList.contains("hidden")) {
    academicsMenu.classList.remove("hidden"); // Show dropdown
    academicsMenu.classList.add("block");
  } else {
    academicsMenu.classList.remove("block"); // Hide dropdown
    academicsMenu.classList.add("hidden");
  }
});
