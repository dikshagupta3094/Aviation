<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SATHM academics</title>
  <link rel="stylesheet" href="../src/style/output.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
</head>

<body>

  <!-- PG  page code begin here -->
  <div class="m-5 p-5 text-xl border border-gray-500 rounded-lg">
    <div class="grid md:grid-flow-col lg:gap-20 gap-0">
      <ul class="border-gray-700 mt-14 bg-white shadow-lg p-4">
        <li
          class="border-gray-400 bg-white rounded border m-1 mb-3 p-2 cursor-pointer text-center font-semibold hover:bg-blue-700 hover:text-white"
          id="toursim1">
          MBA (Toursim) 2yrs
        </li>
        <li
          class="border-gray-400 bg-white rounded border m-1 p-2 cursor-pointer text-center font-semibold hover:bg-blue-700 hover:text-white"
          id="toursim2">
          MBA (Toursim) 5yrs
        </li>
      </ul>
      <!-- MBA Tourism 2 years details -->
      <div class="block" id="data1">
        <h2 class="text-center font-bold text-2xl text-blue-950 mb-3 md:mb-0">
          MBA TOURISM 2yrs
        </h2>
        <div class="flex flex-col bg-white shadow-lg">
          <h3 class="font-bold text-xl underline text-blue-950 md:m-0 m-2">
            About Programm:
          </h3>
          <p class="text-justify p-4 lg:text-xl text-base">
            The objective of a 2-year full-time MBA in Tourism is to develop professionals with a comprehensive understanding of the tourism industry, enabling them to assume leadership roles and drive innovation within the sector. This program aims to equip students with the knowledge, skills, and mindset necessary to address the evolving challenges and opportunities in tourism management.
          <p class="font-semibold lg:text-xl text-base p-3">Key objectives include:
          <ul class="text-justify list-disc lg:text-xl text-base">
            <li class="p-2"><span class="font-semibold">Gaining specialized knowledge in tourism:</span>The program covers a wide range of tourism-specific subjects, including tourism economics, tourism planning and development, destination management, and sustainable tourism practices.</li>
          </ul>
          </p>
          </p>
        </div>
        <p class="shadow-2xl lg:text-xl text-base text-justify mt-10 p-2">By achieving these objectives, our 2 year MBA in Tourism program aims to produce well-rounded professionals who can contribute to the growth and sustainability of the tourism industry.</p>
      </div>

      <!-- MBA Tourism 5 years details -->
      <div class="hidden" id="data2">
        <h2 class="text-center font-bold text-2xl text-blue-950 md:mb-0 mb-3">
          MBA TOURISM 5yrs
        </h2>
        <div class="flex flex-col bg-white shadow-lg">
          <h3 class="font-bold text-xl underline text-blue-950 md:m-0 m-2">
            About Programm:
          </h3>
          <p class="text-justify p-4 lg:text-xl text-base">
            The objective of our 5-year integrated MBA in Tourism program is to provide comprehensive, in-depth education and training in the field of tourism management. This program aims to equip students with the necessary knowledge, skills, and practical experience to excel in various roles within the tourism industry.
          <p class="font-semibold lg:text-xl text-base p-3">Key objectives include:
          <ul class="text-justify list-disc lg:text-xl text-base">
            <li class="p-2"><span class="font-semibold">Developing a strong foundation in business management:</span>Students learn core business principles such as finance, marketing, human resource management, and operations management, applied specifically to the tourism context.</li>
            <li class="p-2"><span class="font-semibold">Gaining specialized knowledge in tourism:</span>The program covers a wide range of tourism-specific subjects, including tourism economics, tourism planning and development, destination management, and sustainable tourism practices.</li>
            <li class="p-2"><span class="font-semibold">Cultivating practical skills:</span>Students develop practical skills through internships, industry projects, and case studies, enabling them to apply their knowledge to real-world situations.</li>
            <li class="p-2"><span class="font-semibold">Fostering critical thinking and problem-solving abilities:</span>The program encourages students to analyze complex tourism issues, think critically, and develop innovative solutions.</li>
            <li class="p-2"><span class="font-semibold">Promoting global awareness:</span>Students are exposed to international tourism trends, cultural diversity, and global perspectives, preparing them for careers in a globalized industry.</li>
          </ul>
          </p>
          </p>
        </div>
        <p class="shadow-2xl lg:text-xl text-base text-justify mt-10 p-2">By achieving these objectives, our 5-year integrated MBA in Tourism program aims to produce well-rounded professionals who can contribute to the growth and sustainability of the tourism industry.</p>
      </div>
    </div>
  </div>
  <!-- PG  page code ends here -->

  <script src="../src/scripts/PG.js"></script>
  <?php include 'footer.php' ?>
</body>

</html>