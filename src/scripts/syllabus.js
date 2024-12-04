let data = [
  {
    name: "MBA Toursim (5 years)",
    link: "../src/assest/syllabus/MBA_TA_5Yrs.pdf",
  },
  {
    name: "MBA Toursim (2 years)",
    link: "../src/assest/syllabus/MBA_TA_2yrs.pdf",
  },
  {
    name: "BBA (Aviation Management)",
    link: "../src/assest/syllabus/BBA_Aviation_3_yrs_Syllabus (1).docx",
  },
  {
    name: "B.com (Retail Operations)",
    link: "../src/assest/syllabus/B.ComRetailOperations_3Years.pdf",
  },
  {
    name: "Diploma In Aviation Security",
    link: "../src/assest/syllabus/Diploma_in_Aviation_Security_...._Syllabus.doc",
  },
  {
    name: "Certificate in Airport Warehouse Coordinator",
    link: "../src/assest/syllabus/Certificate_in_Airport_warehouse_coordinaotr.docx",
  },
];

const list = document.getElementById("syllabus");

function getData() {


data.forEach((item) => {
    list.innerHTML += `
    <tr class="border border-gray-300 hover:bg-gray-100">
      <td class="p-4 text-gray-700">${item.name}</td>
      <td class="p-4 text-center">
        <a
          href="${item.link}"
          download
          class="text-blue-600 hover:text-blue-800 underline"
          >Click here</a
        >
      </td>
    </tr>`;
  });
}

getData();
