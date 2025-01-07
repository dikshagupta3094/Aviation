// JavaScript for Marquee Effect
const marquee = document.getElementById("marquee");
let offset = marquee.parentElement.offsetWidth;

function scrollMarquee() {
  offset -= 0.8; // Speed of scrolling
  if (offset < -marquee.scrollWidth) {
    offset = marquee.parentElement.offsetWidth;
  }
  marquee.style.transform = `translateX(${offset}px) translateY(-50%)`;
  requestAnimationFrame(scrollMarquee);
}

scrollMarquee();

// Elements mapping
const buttons = [
  { button: "aim", data: "data1" },
  { button: "IProgram", data: "data2" },
  { button: "applicability", data: "data3" },
  { button: "duration", data: "data4" },
  { button: "scope", data: "data5" },
  { button: "FSupport", data: "data6" },
  { button: "roles", data: "data7" },
];

// Add click event listeners dynamically
buttons.forEach(({ button, data }) => {
  const buttonElement = document.getElementById(button);
  const dataElement = document.getElementById(data);

  buttonElement.addEventListener("click", () => {
    // Hide all data elements
    buttons.forEach(({ data }) => {
      const element = document.getElementById(data);
      element.classList.add("hidden");
    });

    // Show the clicked data element
    dataElement.classList.remove("hidden");
  });
});
