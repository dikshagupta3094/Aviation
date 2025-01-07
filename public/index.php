<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SATHM Home</title>
  <link
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
    rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../src/style/output.css" />
  <link rel="stylesheet" href="../src/style/noticeboard.css" />
  <link rel="stylesheet" href="../src/style/msgfromdirector.css" />
  <link rel="stylesheet" href="../src/style/style.css">
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

  <style>
    body{
      background-image: url(../src/assest/BackgroundImage.jpg);
    }
  </style>
</head>

<body class="relative">
  <!-- Noticeboard and other home components-->

  <!-- Main Noticeboard Container -->
  <div>
    <div class="NoticeBoardflex-container">
      <div class="NoticeBoardcontainer">
        <!-- Large Notice Board -->
        <div class="large-notice-board" id="largeNoticeBoard">
          <div
            class="large-notice-content"
            onmouseover="stopMarquee()"
            onmouseout="startMarquee()">
            <marquee
              direction="up"
              scrollamount="4"
              id="noticeMarquee"></marquee>
          </div>
        </div>

        <!-- Small Notice Board -->
        <div class="small-notice-board" id="smallNoticeBoard">
          <h2 class="heading">Notifications</h2>
          <div
            class="notice-list"
            onmouseover="stopMarquee()"
            onmouseout="startMarquee()">
            <marquee
              direction="up"
              scrollamount="4"
              id="noticeMarqueeSmall"></marquee>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Wrapper -->
    <div
      class="carousel-container relative overflow-hidden max-w-7xl mx-auto bg-white border-blue-950 border-4 rounded-lg">
      <!-- Carousel Content -->
      <div
        id="carousel"
        class="flex transition-transform duration-300 border-blue-950 ease-in-out"
        style="transform: translateX(0%)">
        <img
          src="../src/assest/Crasouel/BBA.jpg"
          alt="Slide 2"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
        <img
          src="../src/assest/Crasouel/Img2.jpg"
          alt="Slide 2"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
        <img
          src="../src/assest/Crasouel/Img3.jpg"
          alt="Slide 3"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
        <img
          src="../src/assest/Crasouel/Img4.jpg"
          alt="Slide 3"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
        <img
          src="../src/assest/Crasouel/Img5.jpg"
          alt="Slide 3"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
        <img
          src="../src/assest/Crasouel/Img6.jpg"
          alt="Slide 3"
          class="w-full h-auto max-h-[700px] object-contain flex-shrink-0" />
      </div>

      <!-- Navigation Buttons -->
      <div class="absolute inset-0 flex items-center justify-between p-4">
        <button id="prevBtn">
          <div
            class="bg-white rounded-full p-2 shadow text-black hover:bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>
        <button id="nextBtn">
          <div
            class="bg-white rounded-full p-2 shadow text-black hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Indicator Dots -->
      <div class="absolute bottom-4 right-0 left-0">
        <div class="flex items-center justify-center gap-2">
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
          <div
            class="indicator-dot w-3 h-3 bg-blue-950 rounded-full bg-opacity-50"></div>
        </div>
      </div>
    </div>

    <!-- Message from director -->
    <div class="max-w-7xl mx-auto">
      <div
        id="mfd-container"
        class=" mfd-border shadow-md mfd-rounded-lg mfd-mx-4 mfd-mt-8">
        <h1
          id="mfd-heading"
          class="mfd-text-white mfd-text-center mfd-text-4xl mfd-p-4 mfd-font-bold mfd-bg-blue-900 mfd-text-shadow">
          MESSAGE FROM DIRECTOR
        </h1>
        <div
          id="mfd-content"
          class="mfd-flex mfd-flex-col md-mfd-flex-col lg-mfd-flex-row mfd-items-center mfd-justify-center mfd-gap-10 mfd-mx-2 mfd-rounded-lg bg-white"
          data-aos="fade-zoom-in">
          <div id="mfd-image-container" class="mfd-image-container">
            <img
              src="../src/assest/DirectorImage.jpg"
              alt="Director Image"
              id="mfd-director-image"
              class="mfd-box-shadow mfd-m-3 mfd-rounded-lg mfd-h-250px mfd-w-250px md-mfd-h-400px md-mfd-w-400px sm-custom-mfd-h-300px sm-custom-mfd-w-300px p-2" />
          </div>
          <div id="mfd-text-container" class="mfd-w-80">
            <p
              class="mfd-text-justify mfd-pt-8 mfd-px-2 mfd-text-sm md-mfd-text-base lg-mfd-h-40 lg-mfd-overflow-clip">
              I welcome you on behalf of School Of Tourism, Aviation And
              Hospitality Management (SATHM), DAVV, which is a premiere
              department of central India recently opened on 22 July ‘24. The
              department provides high-quality education in the field of
              aviation, tourism, and hospitality management. The department is
              equipped with a mix of young and experienced professionals,
              industry experts with in-depth knowledge and expertise in the
              subject area. The department will soon churn out enthusiastic
              and efficient young professionals as per the need of the
              Aviation, Tourism, and Hospitality industry market. We provide
              holistic development of students by giving them a platform to
              participate in inter-college activities like sports, cultural
              clubs, community services, field visits, etc., for greater
              academic achievement. We would expect that you venture beyond
              your “Comfort Zones” both inside and outside the classrooms.
              Take maximum advantage of facilities, participate fully, and
              evolve into 'Brand Yourself'.
            </p>
            <p class="mfd-px-2" style="text-align: justified">
              I thank you for showing your interest in SATHM, which means a
              family, and by joining SATHM, you are embarking on an education
              system that is meant to be transformative – academically,
              socially, morally, and personally. As “Excellence and Values”
              are our guiding principles which are reflected in every activity
              of our Department, we believe in a well-rounded and
              all-pervasive student experience to maximize learning
              opportunities. Through the efforts of our accomplished faculty,
              our talented students, and exceptional alumni, we have been able
              to make rapid progress on our path of continuous growth and
              innovation.
            </p>
            <a
              href="./about.html"
              id="mfd-read-more"
              class="mfd-read-more mfd-text-blue-950 mfd-font-extrabold">
              Read more...
            </a>
            <p
              id="mfd-director-name"
              class="mfd-font-semibold mfd-text-18px mfd-text-shadow1">
              Dr. Preeti Singh
            </p>
            <p
              id="mfd-director-position"
              class="mfd-font-semibold mfd-text-18px mfd-pb-1 mfd-text-shadow1">
              Director <span>SATHM</span>, DAVV
            </p>
          </div>
        </div>
      </div>

      <!-- Pradhan Mantri School of Excellence -->
    </div>
    <!-- Pradhan mantri section  -->
    <div class="p-6">
      <div
        class="bg-white border-4 shadow-lg mx-auto max-w-7xl mt-8 border-blue-950 rounded-lg">
        <h1
          class="text-white text-center text-4xl p-6 font-bold shadow-md bg-blue-900">
          PRADHAN MANTRI COLLEGES OF EXCELLENCE
        </h1>
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-8 p-6"
          data-aos="fade-zoom-in">
          <!-- Paragraph Content -->
          <div class="lg:w-2/5 w-full p-4">
            <p class="mb-4 text-justify leading-7">
              Since July 2024, The Pradhan Mantri Colleges of Excellence aim
              to provide holistic, quality, and employment-oriented education
              in Madhya Pradesh. Principals and teachers are selected based on
              merit, ensuring skilled administrators and educators.
              Infrastructure development includes lab equipment, library,
              sports facilities, furniture, etc., and new facilities with a
              budget of Rs 336 crore and an annual expenditure of Rs 150 crore
              for 2232 new posts. As many as 1845 academic posts and 387 posts
              for class III and IV categories were created for 55 colleges.
            </p>
            <p class="text-justify leading-7">
              The Indian Knowledge System Cell is being established under the
              National Education Policy-2020, providing access to traditional
              Indian texts and educational resources. These colleges focus on
              multi-faculty education, postgraduate courses, and modern
              pedagogy through IT. One of those colleges is
              <span class="text-blue-950 font-bold text-xl">SATHM</span>.
            </p>
          </div>
          <!-- Image 1 -->
          <div class="lg:w-1/4 w-full flex justify-center">
            <img
              src="../src/assest/PMCollege1.jpg"
              alt="PM College 1"
              class="shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md h-auto w-full" />
          </div>
          <!-- Image 2 -->
          <div class="lg:w-1/4 w-full flex justify-center">
            <img
              src="../src/assest/PMCollege2.jpg"
              alt="PM College 2"
              class="shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md h-auto w-full" />
          </div>
        </div>
      </div>

      <!-- Trusted Partners -->
      <div class="mt-4 py-8">
        <h1 class="text-center text-4xl font-semibold text-gray-700 mb-6">
          Trusted Partners
        </h1>
        <div class="overflow-hidden relative w-full h-[220px]">
          <div
            id="TrustedPartnermarquee-container"
            class="flex items-center gap-10">
            <!-- Images will be dynamically added here -->
          </div>
        </div>
      </div>

    </div>
  </div>

  <?php include 'footer.php' ?>
  <!-- AOS library script -->
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <!-- Index.js script -->
 
   <script src="../src/scripts/index.js"></script>

</body>

</html>