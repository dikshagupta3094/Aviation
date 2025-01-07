// // // NoticeBoard.js
// const notices = [
//   {
//     id: 1,
//     title: 'Exam Schedule for all Academic Programs 2024 (Sept - Dec 2024)',
//     date: 'January 02, 2025',
//     description: 'The final exam for all Academic programs has been scheduled from 6th January 2025 (Monday)',
//     link:"#",
//   },
//   {
//     id: 2,
//     title: 'New Semester Commencement',
//     date: 'January 02, 2025',
//     description: 'The new semester for all the Academic programs will be commenced from 20th January, 2025 (Monday)',
//   },
//   // Additional notices can be added here
// ];

// // Render function for Large Notice Board
// function renderLargeNoticeBoard() {
//   const container = document.createElement('div');
//   container.classList.add(
//     'flex', 'box-shadow', 'bg-cover', 'bg-center', 'overflow-hidden',
//     'rounded-lg', 'p-4', 'lg:w-[75%]', 'lg:h-96', 'my-32'
//   );
//   container.style.backgroundImage = "url('../src/assest/ticket.jpg')";

//   const innerContainer = document.createElement('div');
//   innerContainer.classList.add('w-96', 'ml-40', 'my-16', 'mb-16', 'overflow-hidden');

//   const marquee = document.createElement('marquee');
//   marquee.classList.add('h-52','p-4');
//   marquee.setAttribute('scrollamount', '4');
//   marquee.setAttribute('direction', 'up');
//   marquee.addEventListener('mouseover', (e) => e.target.stop());
//   marquee.addEventListener('mouseout', (e) => e.target.start());

//   const ul = document.createElement('ul');
//   ul.classList.add('space-y-4');

//   notices.forEach((notice) => {
//     const li = document.createElement('li');
//     li.classList.add('p-4','w-[50%]','bg-white', 'rounded', 'shadow-md');
//     li.innerHTML = `
//       <h3 class="font-bold">${notice.title}</h3>
//       <p class="text-gray-600">${notice.date}</p>
//        <p>${notice.description} ></p> 
//     `;
//     // Check if `notice.link` exists
//   if (notice.link) {
//     const link = document.createElement('a');
//     link.href = notice.link;
//     link.target = '_blank'; // Opens link in a new tab
//     link.classList.add('text-blue-500', 'underline', 'hover:text-blue-700');
//     link.textContent = 'Exam form Link';
//     li.querySelector('p:last-child').appendChild(link); // Append the link to the description
//   }

//     ul.appendChild(li);
//   });

//   marquee.appendChild(ul);
//   innerContainer.appendChild(marquee);
//   container.appendChild(innerContainer);

//   return container;
// }

// // Render function for Small Notice Board (without background image)
// function renderSmallNoticeBoard() {
//   const container = document.createElement('div');
//   container.classList.add(
//     'flex', 'flex-col', 'box-shadow', 'overflow-hidden',
//     'rounded-lg', 'p-4', 'w-full', 'h-auto', 'mt-5', 'mb-5'
//   );

//   notices.forEach((notice) => {
//     const noticeCard = document.createElement('div');
//     noticeCard.classList.add('p-2', 'bg-white', 'rounded', 'shadow-md', 'my-2');
//     noticeCard.innerHTML = `
//       <h3 class="font-bold">${notice.title}</h3>
//       <p class="text-gray-600">${notice.date}</p>
//       <p>${notice.description}</p>
//     `;
//         // Check if `notice.link` exists
//   if (notice.link) {
//     const link = document.createElement('a');
//     link.href = notice.link;
//     link.target = '_blank'; // Opens link in a new tab
//     link.classList.add('text-blue-500', 'underline', 'hover:text-blue-700');
//     link.textContent = 'Exam form Link';
//     li.querySelector('p:last-child').appendChild(link); // Append the link to the description
//   }
//     container.appendChild(noticeCard);
//   });

//   return container;
// }

// // Main function to initialize the notice board with responsive switching
// export default function initNoticeBoard() {
//   const layout = document.getElementById('Home-Components');
//   if (!layout) {
//     console.error('Element with id="Home-Components" not found.');
//     return;
//   }

//   function renderNoticeBoard() {
//     layout.innerHTML = ''; // Clear previous content

//     const isLargeScreen = window.matchMedia('(min-width: 1368px)').matches;
//     const noticeBoard = isLargeScreen ? renderLargeNoticeBoard() : renderSmallNoticeBoard();
//     layout.appendChild(noticeBoard);
//   }

//   renderNoticeBoard(); // Initial render

//   // Listen for changes in screen size to update the layout
//   window.addEventListener('resize', renderNoticeBoard);
// }
