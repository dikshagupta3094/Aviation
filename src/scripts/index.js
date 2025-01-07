// Script to handle carousel
const images = document.querySelectorAll("#carousel img");
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".indicator-dot");
const container = document.querySelector(".carousel-container");
let currentSlide = 0;
const autoSlide = true;
const autoSlideInterval = 3000;

const updateSlide = () => {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("p-2", index === currentSlide);
    dot.classList.toggle("bg-opacity-50", index !== currentSlide);
  });
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide();
};

const prevSlide = () => {
  currentSlide =
    currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  updateSlide();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

if (autoSlide) {
  setInterval(nextSlide, autoSlideInterval);
}

//Script for message from director

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-aos='fade-zoom-in']");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
});

//Script for handle notice board
const notices = [
  {
    id: 1,
    title:
      "Exam Schedule for all Academic Programs 2024 (Sept - Dec 2024)",
    date: "January 02, 2025",
    description:
      "The final exam for all Academic programs has been scheduled from 6th January 2025 (Monday)",
    link: "../src/assest/Exam-form-all-subjects.pdf",
  },
  {
    id: 2,
    title: "New Semester Commencement",
    date: "January 02, 2025",
    description:
      "The new semester for all the Academic programs will be commenced from 20th January, 2025 (Monday)",
  },
  // Additional notices can be added here
];

// // Populate notices dynamically
function populateNotices() {
  const largeNoticeMarquee = document.getElementById("noticeMarquee");
  const smallNoticeMarquee =
    document.getElementById("noticeMarqueeSmall");

  // Generate notice items HTML
  const noticesHtml = notices
    .map((notice) => {
      const linkHtml = notice.link
        ? `<a href="${notice.link}" class="notice-link text-blue-500 hover:text-blue-700" target="_blank" download >Exam Form Link</a>`
        : "";
      return `
  <li class="notice-item">
    <h3 class="notice-title">${notice.title}</h3>
    <p class="notice-date">${notice.date}</p>
    <p class="notice-description">${notice.description} ${linkHtml}</p>
  </li>
`;
    })
    .join("");

  // Insert notices HTML into both large and small marquee elements
  largeNoticeMarquee.innerHTML = `<ul>${noticesHtml}</ul>`;
  smallNoticeMarquee.innerHTML = `<ul>${noticesHtml}</ul>`;
}

// Stop and start marquee on hover
function stopMarquee() {
  document
    .querySelectorAll("marquee")
    .forEach((marquee) => marquee.stop());
}

function startMarquee() {
  document
    .querySelectorAll("marquee")
    .forEach((marquee) => marquee.start());
}

// Initialize the notice board on page load
document.addEventListener("DOMContentLoaded", populateNotices);
document.addEventListener("DOMContentLoaded", startMarquee);


// Define the slides (ensure these paths are correct)
const slides = [
  { slide: "../src/assest/Trusted/mpfc.png", key: "1" },
  { slide: "../src/assest/Trusted/DABH.png", key: "2" },
  { slide: "../src/assest/Trusted/mpfc.png", key: "3" },
  { slide: "../src/assest/Trusted/DABH.png", key: "4" },
  { slide: "../src/assest/Trusted/mpfc.png", key: "5" },
  { slide: "../src/assest/Trusted/DABH.png", key: "6" },
  { slide: "../src/assest/Trusted/mpfc.png", key: "7" },
  { slide: "../src/assest/Trusted/DABH.png", key: "8" },
];

// Add slides to the marquee
const marqueeContainer = document.getElementById(
  "TrustedPartnermarquee-container"
);
slides.forEach(({ slide, key }) => {
  const img = document.createElement("img");
  img.src = slide;
  img.alt = `Slide ${key}`;
  img.className =
    "w-[200px] h-[150px] object-contain rounded-md  transition-transform hover:scale-110 duration-300";
  marqueeContainer.appendChild(img);
});

// Duplicate slides for infinite scrolling
const duplicateSlides = () => {
  const originalSlides = marqueeContainer.innerHTML;
  marqueeContainer.innerHTML += originalSlides;
};

// Marquee Animation
const TrustedPartnerstartMarquee = () => {
  const speed = 0.6; // Adjust scrolling speed
  let offset = 0;

  const TrustedPartneranimate = () => {
    offset -= speed;
    const containerWidth = marqueeContainer.scrollWidth / 2;
    if (Math.abs(offset) >= containerWidth) {
      offset = 0; // Reset to make it seamless
    }
    marqueeContainer.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(TrustedPartneranimate);
  };

  TrustedPartneranimate();
};

// Initialize marquee on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  duplicateSlides();
  TrustedPartnerstartMarquee();
});


// Initialize AOS
AOS.init({
  offset: 300,
  easing: "ease-in-sine",
  duration: 500,
});
