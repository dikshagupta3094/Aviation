const tableData = [
    {
      id: 1,
      course: "BBA (Aviation Management)",
      fee: "BOYS 28880, GIRLS 28672",
      seats: 60,
      duration: "4 yrs",
     
    },
    {
      id: 2,
      course: "B.Com (Retail Operations)",
      fee: "BOYS 23380, GIRLS 23172",
      seats: 60,
      duration: "4 yrs",
   
    },
    {
      id: 3,
      course: "B.Com (Logistics)",
      fee: "BOYS 23380, GIRLS 23172",
      seats: 60,
      duration: "4 yrs",
      
    },
    {
      id: 4,
      course: "Diploma in Aviation Security",
      fee: "28880 (Total Fee)",
      seats: 40,
      duration: "1 yrs, 6 months",
      
    },
    {
      id: 5,
      course: "Certificate in Airport Warehouse Coordinator",
      fee: "13690 (Total Fee)",
      seats: 30,
      duration: "3 months",
      
    },
    {
      id: 6,
      course: "B. SC. (Aviation Management)",
      fee: "BOYS 28880, GIRLS 28672",
      seats: 60,
      duration: "4 yrs",
      
    },
  ];

  let fees = document.getElementById('fees')

  function getData(){
    tableData.forEach((item)=>{
         fees.innerHTML +=` <tr class="border border-black hover:bg-gray-100 text-center">
                <td class="p-4 text-gray-700  border border-black">${item.id}</td>
                <td class="p-4 text-gray-700  border border-black">${item.course}</td>
                <td class="p-4 text-gray-700  border border-black">${item.fee}</td>
                <td class="p-4 text-gray-700  border border-black">${item.seats}</td>
                <td class="p-4 text-gray-700  border border-black">${item.duration}</td>
              </tr>`
    })
  }
  getData()