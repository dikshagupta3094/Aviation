export function createHeaderComponent() {
  const headerHTML = `
    <div class="flex flex-col items-center justify-center p-3 bg-cover" style="background-image: url('../src/assest/Logo/image_bg3.jpg')">
        <div class="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8">
            <img src="../src/assest/Logo/Devi_Ahilya_Vishwavidyalaya_Logo.png" class="md:w-36 md:h-36 hidden md:block" alt="Devi Ahilya Logo" />
            <img src="../src/assest/Logo/sathm_logo_without_background.png" class="block md:hidden w-40 h-40" alt="Small Device Logo" />
            <div class="text-center md:px-2 lg:px-2">
                <h1 class="md:text-3xl lg:text-4xl text-lg font-bold text-blue-900 sm:px-0 py-0">
                    SCHOOL OF AVIATION, TOURISM AND HOSPITALITY MANAGEMENT
                </h1>
                <span class="text-lg md:text-xl lg:text-2xl text-blue-900 font-bold">[SATHM]</span>
                <p class="text-lg md:text-2xl lg:text-3xl text-blue-900 mt-2 tracking-wider font-bold text-center">
                    DEVI AHILYA VISHWAVIDYALAYA, INDORE
                </p>
                <p class="text-xl text-blue-900 mt-1 tracking-wider font-semibold text-center">
                    Accredited A+ Grade by NAAC
                </p>
            </div>
            <img src="../src/assest/Logo/sathm_logo_without_background.png" alt="SATHM Logo" class="md:w-40 md:h-40 hidden md:block" />
        </div>
    </div>

    <nav class="md:border-b md:border-gray-400 md:py-2 md:bg-blue-950">
        <ul class="hidden md:flex md:justify-around md:items-center text-white text-[18px] font-bold gap-2 p-2">
            <li><a href=${"./index.html"} class="hover:text-blue-700 hover:underline">Home</a></li>
            <li><a href=${"./about.html"} class="hover:text-blue-700 hover:underline">About</a></li>
            <div class="hover:text-blue-700 cursor-pointer flex items-center justify-center gap-1 relative hover:underline" id = "academics"> 
             <ul>Academics</ul>
            <i class="fa-solid fa-caret-down"></i>  
            
           </div>
            <li><a href="#" class="hover:text-blue-700 hover:underline">Faculties</a></li>
            <li><a href="#" class="hover:text-blue-700 hover:underline">Events & Activities</a></li>
            <li><a href="#" class="hover:text-blue-700 hover:underline">Corporate Linkages</a></li>
            <li><a href="#" class="hover:text-blue-700 hover:underline">MOUs</a></li>
        </ul>
    </nav>
    `;
  const headerContainer = document.createElement("div");
  headerContainer.innerHTML = headerHTML;

  const academics = headerContainer.querySelector("#academics");
  academics.addEventListener("click", () => {
    const dropdown = `<div class = 'absolute left-0 top-9 mt-2 w-max flex flex-col items-center justify-center text-black'>
          <ul class = 'flex flex-col'>
          <li class = 'p-1 text-center border-gray-200 border bg-gray-100 hover:underline hover:text-blue-800'> <a href = ${"./PG.html"}>PG Course</a></li>
          <li class = 'p-1 text-center border-gray-200 border bg-gray-100 hover:underline hover:text-blue-800'>UG Course</li>
          <li class = 'p-1 text-center border-gray-200 border bg-gray-100 hover:underline hover:text-blue-800'>Diploma Course</li>
          <li class = 'p-1 text-center border-gray-200 border bg-gray-100 hover:underline hover:text-blue-800'>Certificate Course</li>
          </ul>
        </div>`;

    const existingDropdown = academics.querySelector(".dropdown");
    if (existingDropdown) {
      existingDropdown.remove(); // Remove if it exists
    } else {
      const menu = document.createElement("div");
      menu.classList.add("dropdown"); // Add a class to identify it
      menu.innerHTML = dropdown;
      academics.appendChild(menu);
    }
  });

  // Return the header element
  return headerContainer;
}
