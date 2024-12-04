// NoticeBoard.js
const notices = [
  {
    id: 1,
    title: 'Exam Schedule for Semester 2024',
    date: 'September 15, 2024',
    description: 'The final exam schedule for the semester is now available. Please check the university portal for details.',
  },
  {
    id: 2,
    title: 'New Library Hours',
    date: 'September 10, 2024',
    description: 'The library will now be open from 8 AM to 10 PM on weekdays and 9 AM to 5 PM on weekends.',
  },
  // Additional notices can be added here
];

// Render function for Large Notice Board
function renderLargeNoticeBoard() {
  const container = document.createElement('div');
  container.classList.add(
    'flex', 'box-shadow', 'bg-cover', 'bg-center', 'overflow-hidden',
    'rounded-lg', 'p-4', 'lg:w-[75%]', 'lg:h-96', 'my-32'
  );
  container.style.backgroundImage = "url('../src/assest/ticket.jpg')";

  const innerContainer = document.createElement('div');
  innerContainer.classList.add('w-96', 'ml-40', 'my-16', 'mb-16', 'overflow-hidden');

  const marquee = document.createElement('marquee');
  marquee.classList.add('h-52','p-4');
  marquee.setAttribute('scrollamount', '4');
  marquee.setAttribute('direction', 'up');
  marquee.addEventListener('mouseover', (e) => e.target.stop());
  marquee.addEventListener('mouseout', (e) => e.target.start());

  const ul = document.createElement('ul');
  ul.classList.add('space-y-4');

  notices.forEach((notice) => {
    const li = document.createElement('li');
    li.classList.add('p-4','w-[50%]','bg-white', 'rounded', 'shadow-md');
    li.innerHTML = `
      <h3 class="font-bold">${notice.title}</h3>
      <p class="text-gray-600">${notice.date}</p>
      <p>${notice.description}</p>
    `;
    ul.appendChild(li);
  });

  marquee.appendChild(ul);
  innerContainer.appendChild(marquee);
  container.appendChild(innerContainer);

  return container;
}

// Render function for Small Notice Board (without background image)
function renderSmallNoticeBoard() {
  const container = document.createElement('div');
  container.classList.add(
    'flex', 'flex-col', 'box-shadow', 'overflow-hidden',
    'rounded-lg', 'p-4', 'w-full', 'h-auto', 'mt-5', 'mb-5'
  );

  notices.forEach((notice) => {
    const noticeCard = document.createElement('div');
    noticeCard.classList.add('p-2', 'bg-white', 'rounded', 'shadow-md', 'my-2');
    noticeCard.innerHTML = `
      <h3 class="font-bold">${notice.title}</h3>
      <p class="text-gray-600">${notice.date}</p>
      <p>${notice.description}</p>
    `;
    container.appendChild(noticeCard);
  });

  return container;
}

// Main function to initialize the notice board with responsive switching
export default function initNoticeBoard() {
  const layout = document.getElementById('Home-Components');
  if (!layout) {
    console.error('Element with id="Home-Components" not found.');
    return;
  }

  function renderNoticeBoard() {
    layout.innerHTML = ''; // Clear previous content

    const isLargeScreen = window.matchMedia('(min-width: 1368px)').matches;
    const noticeBoard = isLargeScreen ? renderLargeNoticeBoard() : renderSmallNoticeBoard();
    layout.appendChild(noticeBoard);
  }

  renderNoticeBoard(); // Initial render

  // Listen for changes in screen size to update the layout
  window.addEventListener('resize', renderNoticeBoard);
}
