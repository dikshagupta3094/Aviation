<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Component</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="../src/style/output.css">
</head>
<body>
  <footer class="bg-blue-900 text-white">
    <!-- Header section with title and button -->
    <div class="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#133b7419] py-7">
      <h1 class="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
        Give <span class="text-teal-400">wings</span> to your dreams
      </h1>
      <div>
        <button class="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Popins] rounded-md text-white md:w-auto w-full" id="contactButton">Contact Us</button>
      </div>
    </div>

    <!-- Items Container -->
    <div class="bg-blue-950 p-0">
      <div class="footerimage mt-0 mb-0 bg-no-repeat bg-[length:15%_auto] -z-0 bg-center bg-blue-950 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-10 px-5 py-16 ml-10 mr-10">
        <!-- Admission -->
        <ul class="text-left">
          <h1 class="mb-1 font-semibold">Admission</h1>
          <li><a href="./feeStructure.php" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Fees Structure</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Admission 2025</a></li>
        </ul>

        <!-- Miscellaneous -->
        <ul class="text-left">
          <h1 class="mb-1 font-semibold">Miscellaneous</h1>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Ordinances</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Grievance</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Faculty Profile</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Staff Profile</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Video Channel</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">NSS</a></li>
        </ul>

        <!-- Downloads -->
        <ul class="text-left">
          <h1 class="mb-1 font-semibold">Downloads</h1>
          <li><a href="../src/assest/Academic_Calendar.pdf" download class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Academic Calendar</a></li>
          <li><a href="./syllabus.php" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">Syllabus</a></li>
        </ul>

        <!-- Digital Library -->
        <ul class="text-left">
          <h1 class="mb-1 font-semibold">Digital Library</h1>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">SWAYAM MOOCs</a></li>
          <li><a href="#" class="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">NPTEL</a></li>
        </ul>
      </div>

      <hr class="mt-8 border-t-1 border-gray-400 w-[90%] mx-auto z-10">

      <div class="text-gray-400 grid grid-cols-3 sm:grid-cols-2 gap-20 sm:px-20 px-20 py-5">
        <ul class="flex items-center gap-2">
          <li>©School of Aviation, Tourism and Hospitality- 452001</li>
          <i class="fa-solid fa-envelope text-cyan-500 text-xl"></i>
        </ul>
        <ul class="text-end text-base">
          <a href="./aboutdeveloper.php" title="About developers">About developers</a>
        </ul>
      </div>
    </div>

    <!-- Modal -->
    <div id="modalOverlay" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" style="display: none;">
      <div class="bg-white p-8 rounded-md text-black w-1/2 relative">
        <button id="closeIcon" class="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900 cursor-pointer">&times;</button>
        <h2 class="text-center font-bold text-3xl text-blue-700">Contact Us</h2>
        <p class="text-lg text-gray-700">Email: head.sathm@dauniv.ac.in</p>
        <p class="text-lg text-gray-700">Address: Takshila Campus, Khandwa road Indore</p>
        <p class="text-lg text-gray-700 mb-2">Contact: 9098354300 (Mr. Anshul Jain)</p>
        <p class="text-lg text-gray-700 mb-2">Contact: 8103586406 (Ms. Anamika Shukla)</p>
        <p class="text-lg text-gray-700 mb-2">Contact: 8989456828 (Mr. Alok A. Jha)</p>
        <p class="text-lg text-gray-700">For more details, contact Prof. Preeti Singh (Head, SATHM) 9425349044</p>
      </div>
    </div>
  </footer>
  
  <script src="../src/scripts/footer.js"></script>
</body>
</html>
