let data = [
  {
    name: "Diksha Bhatia",
    designation: "Marketing & Business Head",
    image: "../src/assest/Faculties/diksha_bhatia.jpg",
  },
  {
    name: "Khushbu Gupta ",
    designation: "Assistant Professor ",
    image: "../src/assest/Faculties/Khushbu_Gupta.jpg",
  },
  {
    name: "Ratan Ambhore",
    designation: "Head of ground operations",
    image: "../src/assest/Faculties/ratan_ambhore.jpeg",
  },
  {
    name: "Anshul Kumar Jain",
    designation: "Faculty",
    image: "../src/assest/Faculties/Anshul_jain.jpg",
  },
  {
    name: "Alok Anand Jha",
    designation: "Faculty",
    image: "../src/assest/Faculties/Alok_anand.jpg",
  },
  {
    name: "Piyush Verma",
    designation: "SR.MANAGER- AIR CARGO FOR VISTARA AIRLINE",
    image: "../src/assest/Faculties/Piyush_Verma.jpg",
  },
];

const list = document.getElementById("list");

function getData() {
  for (let i = 0; i < data.length; i++) {
    list.innerHTML += `<div class="flex flex-col items-center justify-center  w-[250px] md:my-5  my-5 mx-5 p-5 rounded-lg bg-[rgb(249,249,249)] transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              <img src=${data[i].image} class="h-[200px] w-[200px] rounded-lg mt-5" alt="Image" />
              <p class="p-[1px] cursor-pointer hover:text-purple-600 font-semibold">${data[i].name}</p>
              <p class="p-[1px] cursor-pointer hover:text-purple-600 font-semibold">${data[i].designation}</p>
            </div>`;
  }
}
getData();
