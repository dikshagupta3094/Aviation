
document.addEventListener('DOMContentLoaded',function(){
    let data = [ 
      {
        id:1,
        name: "Ratan Ambhore",
        designation: "Head of ground operations",
        image: "../src/assest/Faculties/ratan_ambhore.jpeg",
        qualification:"Bsc. MTA - Master of Tourism Administration ",
        Teaching_Experience:"23yrs",
        specialization:"Tourism, Aviation Management"
      },
      {  id:2,
        name: "Piyush Verma",
        designation: "SR.MANAGER- AIR CARGO FOR VISTARA AIRLINE",
        image: "../src/assest/Faculties/Piyush_Verma.jpg",
        qualification:"MBA - INTERNATIONAL BUSINESS/ SUPPLY CHAIN MANAGEMENT",
        Teaching_Experience:"11yrs",
        specialization:"AVIATION,AIR CARGO, LOGISTICS, TRANSPORTATION, WAREHOUSING,INVENTTORY ,PURCHASE,EXPORT-IMPORT DOCUMENTATION, DISTRIBUTION,PRODUCTION PLANNING, E COMMERCE LOGISTICS,RAIL,ROAD,SEA FREIGHT MANAGEMENT,CUSTOMS,CHA,IATA ,DANGEROUS GOODS MGT, CUSTODIAN,INTERNATIONAL CARGO TERMINAL,ICD,INTERNATIONL FREIGHT,INCOTERMS"
      },
      {
        id:3,
        name: "Alok Anand Jha",
        designation: "Faculty",
        image: "../src/assest/Faculties/Alok_anand.jpg",
        qualification:"UGC NET (Commerce and Management)",
        Teaching_Experience:"11yrs",
        specialization:"Management, Marketing, OB, Tax, SPSS, Research"
      },
      {
        id:4,
        name: "Khushbu Gupta ",
        designation: "Assistant Professor ",
        image: "../src/assest/Faculties/Khushbu_Gupta.jpg",
        qualification:"MBA",
        Teaching_Experience:"5yrs",
        specialization:"HR"
      },
     
      {
        id:5,
        name: "Anshul Kumar Jain",
        designation: "Faculty",
        image: "../src/assest/Faculties/Anshul_jain.jpg",
        qualification:"PhD ( Pursuing), UGC NET COMMERCE",
        Teaching_Experience:"3yrs",
        specialization:"COMMERCE"
      },
      {
        id:6,
        name: "Diksha Bhatia",
        designation: "Marketing & Business Head",
        image: "../src/assest/Faculties/diksha_bhatia.jpg",
        qualification:"MBA(APR), pursuing NET",
        Teaching_Experience:"10yrs",
        specialization:"MarComm, Management"
      },
    
      {
        id:7,
        name: "Dr. Kartika Mehta",
        designation: "Visiting Faculty",
        image: "../src/assest/Faculties/Dr.Kartika_Gupta_Mehta.bmp",
        qualification:"M. Com., B. Ed, M. Phil, PhD (Commerce)",
        Teaching_Experience:"10yrs",
        specialization:"Accounts and Business statistics"
      },
      
      
      {
        id:8,
        name: "Dr.Shruti Maheshwari",
        designation: "Visiting Faculty",
        image: "../src/assest/Faculties/Dr.Shruti_P_Maheshwari.jpg",
        qualification:"Phd-Management",
        Teaching_Experience:"14yrs",
        specialization:"Management, Skill enhancement, Personality development"
      },
    
      {
        id:9,
        name: "Dr. Bharti  Arya",
        designation: "Visiting Faculty",
        image: "../src/assest/Faculties/Dr.Bharti_arya.jpg",
        qualification:"Ph.D, MBA,M.Com,B.Ed",
        Teaching_Experience:"9yrs",
        specialization:"Finance, Accounts, Taxation"
      },
    
    ];
    
    const list = document.getElementById("list");
    
    function getData() {
      for (let i = 0; i < data.length; i++) {
        const card = document.createElement("div");
        card.className =
          "flex flex-col items-center justify-center w-[250px] md:my-5 my-5 mx-5 p-5 rounded-lg bg-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 cursor-pointer text-white font-semibold";
        card.innerHTML = `
          <img src=${data[i].image} class="h-[200px] w-[200px] rounded-lg mt-5" alt="Image" />
          <p class="p-[1px] cursor-pointer hover:text-gray-300 font-semibold">${data[i].name}</p>
          <p class="p-[1px] cursor-pointer hover:text-gray-300 font-semibold">${data[i].designation}</p>
        `;
        // Add click event listener for popup
        card.addEventListener("click", () => showPopup(data[i]));
        list.appendChild(card);
      }
    }
    
  
    getData();
    
    function showPopup(cardData) {
      // Create popup HTML
      const popupHTML = `
      <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" id = "popup-container">
          <div class="bg-white rounded-lg w-[90%] max-w-md md:max-w-2xl p-6 shadow-2xl relative">
            <button
              class="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors duration-300" id = "close-popup" 
            >
              <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
            <div class="flex flex-col md:flex-row items-center gap-6">
              <img src="${cardData.image}" class="h-40 w-40 rounded-full shadow-lg" alt="Popup Image" />
              <div class="text-center md:text-left">
                <h2 class="text-2xl font-bold text-gray-800">${cardData.name}</h2>
                <p class="text-lg text-gray-600 mt-2">${cardData.designation}</p>
              </div>
            </div>
            <div class="mt-6 text-lg text-gray-700">
              <p><span class="font-bold">Qualification:</span> ${cardData.qualification}</p>
              <p class="mt-2"><span class="font-bold">Specialization:</span> ${cardData.specialization}</p>
              <p class="mt-2"><span class="font-bold">Teaching Experience:</span> ${cardData.Teaching_Experience}</p>
            </div>
          </div>
        </div>
      `;
    
      // Add popup to the body
      const popupContainer = document.createElement("div");
      popupContainer.id = "popup-container";
      popupContainer.innerHTML = popupHTML;
      document.body.appendChild(popupContainer);
       

      const popup = document.getElementById('close-popup');
       popup.addEventListener('click',()=>{
        console.log("POPUP");
        
      const popup = document.getElementById("popup-container");
      if (popup) popup.remove();
    })
    }
    
     
  })
  