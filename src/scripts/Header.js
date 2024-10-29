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
        <ul class="hidden md:flex md:justify-around md:items-center text-white text-[18px] font-bold gap-5 p-2">
            <li><a href="#" class="hover:text-blue-700">Home</a></li>
            <li><a href="#" class="hover:text-blue-700">About</a></li>
            <li><a href="#" class="hover:text-blue-700">Academics</a></li>
            <li><a href="#" class="hover:text-blue-700">Faculties</a></li>
            <li><a href="#" class="hover:text-blue-700">Events & Activities</a></li>
            <li><a href="#" class="hover:text-blue-700">Corporate Linkages</a></li>
            <li><a href="#" class="hover:text-blue-700">MOUs</a></li>
        </ul>
    </nav>
    <div class="md:hidden">
        <button id="menu-btn" class="text-2xl p-2 fixed top-0">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div id="drawer" class="hidden fixed left-0 top-0 w-64 bg-white shadow-md h-full">
            <button id="close-btn" class="p-4 text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <ul class="p-4 space-y-6">
                <li><a href="#" class="flex items-center"><i class="fas fa-home mr-3"></i>Home</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-plane mr-3"></i>About</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-book mr-3"></i>Academics</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-users mr-3"></i>Faculties</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-calendar-alt mr-3"></i>Events & Activities</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-industry mr-3"></i>Corporate Linkages</a></li>
                <li><a href="#" class="flex items-center"><i class="fas fa-handshake mr-3"></i>MOUs</a></li>
            </ul>
        </div>
    </div>
    `;
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = headerHTML;
    
    // Return the header element
    return headerContainer;}