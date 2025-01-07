
let developerData = [
  {
    name: "Aditya Agrawal",
    course: "M.Tech IT (5yrs)",
    image: "../src/assest/Developer/Aditya_Agrawal.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-agrawal-87a18a23a",
  },
  {
    name: "Diksha Gupta",
    course: "MCA (5yrs)",
    image: "../src/assest/Developer/Diksha_Gupta.jpeg",
    linkedin: "https://www.linkedin.com/in/diksha-gupta3094/",
  },
  {
    name: "Kashi Sankhla",
    course: "MCA (5yrs)",
    image: "../src/assest/Developer/Kashi_Sankhla.jpg",
    linkedin: "https://bit.ly/KashiSankhlaLinkedinProfile",
  },
];
const list = document.getElementById("developer");
function getData() {
  developerData.forEach((data) => {
    list.innerHTML += `<div class="flex flex-col items-center ">
      <div class="relative group">
        <a href=${data.linkedin} target="_blank">
          <img
            src=${data.image}
            class="w-[180px] h-[180px] rounded-xl object-cover hover:bg-black hover:opacity-85"
          />
        </a>
        <a
          href=${data.linkedin}
          target="_blank"
          class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
        <i class="fa-brands fa-linkedin  text-blue-700 text-center w-11 h-11"></i>
        </a>
      </div>

      <div class="text-center mt-2">
          <p className="text-lg font-extrabold text-center cursor-pointer hover:text-purple-900">
            ${data.name}
          </p>
          <p className="text-lg font-extrabold text-center cursor-pointer hover:text-purple-900">
            ${data.course}
          </p>
      </div>
    </div>`;
  });
}
getData();
