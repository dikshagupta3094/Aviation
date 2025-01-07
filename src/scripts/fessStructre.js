document.addEventListener('DOMContentLoaded',function(){    
    let tableData = [
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
        course: "Certificate in airport warehouse coordinator",
        fee: "28880 (Total Fee)",
        seats: 40,
        duration: "1 yrs, 6 months",
    },   
    ];
    let fees = document.getElementById('fees').getElementsByTagName('tbody')[0]; 
  
    function getData(){
      fees.innerHTML = "";
      tableData.forEach((item,index)=>{
           fees.innerHTML +=` <tr class="border border-black hover:bg-gray-100 text-center">
                  <td class="p-4 text-gray-700  border border-black">${index+1}</td>
                  <td class="p-4 text-gray-700  border border-black">${item.course}</td>
                  <td class="p-4 text-gray-700  border border-black">${item.fee}</td>
                  <td class="p-4 text-gray-700  border border-black">${item.seats}</td>
                  <td class="p-4 text-gray-700  border border-black">${item.duration}</td>
                </tr>`
      }) 
    }
  
    function addCourses(courses) {
      tableData.push(...courses); // Spread operator to add all courses to tableData
      getData(); // Refresh the table
    }
    
    // Function to delete multiple courses by IDs
    function deleteCoursesByIds(ids) {
      tableData = tableData.filter((course) => !ids.includes(course.id)); // Filter out courses with matching IDs
      getData(); // Refresh the table
    }
    
    // Initial Render
    getData()
    
    //Delete the course whose id is 5
    deleteCoursesByIds([5]);
  })