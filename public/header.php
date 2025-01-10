<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SATHM Home</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../src/style/output.css" />
  <link rel="stylesheet" href="../src/style/style.css" />
  <style>
    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #fff;
      transition: width 0.3s ease;
      z-index: 1000;
    }

    @media (max-width: 768px) {

      /* Adjust the breakpoint as needed */
      .hide-on-small {
        display: none;
      }
    }
  </style>
</head>

<body>
  <!-- Header Placeholder -->
  <div
    class="flex flex-col items-center justify-center p-3 bg-cover"
    style="background-image: url('../src/assest/Logo/image_bg2.jpg')">
    <div
      class="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8">

      <img
        src="../src/assest/Logo/Devi_Ahilya_Vishwavidyalaya_Logo.png"
        class="w-36 h-36 md:block hide-on-small"
        alt="Devi Ahilya Logo" />

      <img
        src="../src/assest/Logo/sathm_logo_without_background.png"
        class="block md:hidden w-40 h-40"
        alt="Small Device Logo" />
      <div class="text-center md:px-2 lg:px-2">
        <h1
          class="md:text-3xl lg:text-4xl text-lg font-bold text-blue-900 sm:px-0 py-0">
          SCHOOL OF AVIATION, TOURISM AND HOSPITALITY MANAGEMENT
        </h1>
        <span class="text-lg md:text-xl lg:text-2xl text-blue-900 font-bold">[SATHM]</span>
        <p
          class="text-lg md:text-2xl lg:text-3xl text-blue-900 mt-2 tracking-wider font-bold text-center">
          DEVI AHILYA VISHWAVIDYALAYA, INDORE
        </p>
        <p
          class="text-xl text-blue-900 mt-1 tracking-wider font-semibold text-center">
          Accredited A+ Grade by NAAC
        </p>
      </div>

      <img
        src="../src/assest/Logo/sathm_logo_without_background.png"
        class="w-40 h-40 md:block hide-on-small"
        alt="SATHM Logo" />
    </div>
  </div>

  <nav
    id="NavBar"
    class="md:border-b md:border-gray-400 sticky top-0 z-50 md:py-2 md:bg-blue-950">
    <ul
      class="hidden md:flex md:justify-around md:items-center text-white text-[18px] font-bold gap-2 p-2">
      <li>
        <a href="./index.php" class="hover:text-blue-700 hover:underline">Home</a>
      </li>
      <li>
        <a href="./about.php" class="hover:text-blue-700 hover:underline">About</a>
      </li>
      <div
        class="hover:text-blue-700 cursor-pointer flex items-center justify-center gap-1 relative hover:underline"
        id="academics">
        <ul>
          Academics
        </ul>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <li>
        <a href="./faculties.php" class="hover:text-blue-700 hover:underline">Faculties</a>
      </li>
      <li>
        <a href="./events.php" class="hover:text-blue-700 hover:underline">Events & Activities</a>
      </li>
      <li>
        <a href="./corporate.php" class="hover:text-blue-700 hover:underline">Corporate Linkages</a>
      </li>
      <li>
        <a href="./mous.php" class="hover:text-blue-700 hover:underline">MOUs</a>
      </li>
    </ul>
  </nav>

  <!-- Drawer (Hidden for Desktop)  -->
  <div class="md:hidden drawer">
    <button id="menu-btn" class="text-2xl p-2 fixed top-0">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div
      id="drawer"
      class="hidden fixed left-0 top-0 w-64 bg-white shadow-md h-full">
      <button id="close-btn" class="p-4 text-2xl">
        <i class="fas fa-times"></i>
      </button>
      <ul class="p-4 space-y-6 bg-[#f7f7f7]">
        <li>
          <a href="./index.php" class="flex items-center"><i class="fas fa-home mr-3"></i>Home</a>
        </li>
        <li>
          <a href="./about.php" class="flex items-center"><i class="fas fa-plane mr-3"></i>About</a>
        </li>
        <li class="relative">
          <div
            id="academicsDropdown"
            class="flex items-center cursor-pointer">
            <i class="fas fa-book mr-3"></i>
            <span>Academics</span>
            <i class="fa-solid fa-caret-down ml-2"></i>
          </div>
          <!-- Dropdown Content -->
          <div id="academicsMenu" class="hidden mt-2">
            <ul class="flex flex-col w-full">
              <li
                class="p-2 text-center border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white">
                <a href="./PG.php">PG Course</a>
              </li>
              <li
                class="p-2 text-center border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white">
                <a href="./UG.php">UG Course</a>
              </li>
              <li
                class="p-2 text-center border bg-[#e0e7ff] hover:underline hover:bg-blue-800 hover:text-white">
                <a href="./Diploma.php">Diploma Course</a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="./faculties.php" class="flex items-center"><i class="fas fa-users mr-3"></i>Faculties</a>
        </li>
        <li>
          <a href="./events.php" class="flex items-center"><i class="fas fa-calendar-alt mr-3"></i>Events & Activities</a>
        </li>
        <li>
          <a href="./corporate.php" class="flex items-center"><i class="fas fa-industry mr-3"></i>Corporate Linkages</a>
        </li>
        <li>
          <a href="./mous.php" class="flex items-center"><i class="fas fa-handshake mr-3"></i>MOUs</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Script tag -->
  <script src="../src/scripts/header.js"></script>
</body>

</html>