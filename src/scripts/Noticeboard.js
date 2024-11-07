// noticeboard.js

const notices = [
  { id: 1, title: 'Exam Schedule for Semester 2024', date: 'September 15, 2024', description: 'The final exam schedule for the semester is now available. Please check the university portal for details.' },
  { id: 2, title: 'New Library Hours', date: 'September 10, 2024', description: 'The library will now be open from 8 AM to 10 PM on weekdays and 9 AM to 5 PM on weekends.' },
];

// Helper to create individual notice
const createNoticeElement = (notice) => {
  const li = document.createElement('li');
  li.className = 'border-b pb-4';

  const title = document.createElement('h3');
  title.className = 'text-lg font-semibold text-blue-900';
  title.textContent = notice.title;

  const date = document.createElement('p');
  date.className = 'text-sm text-gray-500';
  date.textContent = notice.date;

  const description = document.createElement('p');
  description.className = 'mt-2 text-gray-700';
  description.textContent = notice.description;

  li.appendChild(title);
  li.appendChild(date);
  li.appendChild(description);
  return li;
};

// Large Notice Board
const LargeNoticeBoard = () => {
  const container = document.createElement('div');
  container.className =
    'flex items-center justify-center bg-cover bg-center bg-url("../assest/ticket.jpg") overflow-hidden rounded-lg p-4 lg:w-[75%] lg:h-96 mt-10 mb-10';

  const wrapper = document.createElement('div');
  wrapper.className = 'w-96 h-52 overflow-hidden';

  const scrollContainer = document.createElement('div');
  scrollContainer.className = 'space-y-4 animate-scroll';

  const ul = document.createElement('ul');
  ul.className = 'space-y-4';
  notices.forEach((notice) => ul.appendChild(createNoticeElement(notice)));

  scrollContainer.appendChild(ul);
  wrapper.appendChild(scrollContainer);
  container.appendChild(wrapper);
  return container;
};

// Small Notice Board
const SmallNoticeBoard = () => {
  const container = document.createElement('div');
  container.className = 'bg-white p-4 shadow-md rounded-lg w-full max-w-md';

  const header = document.createElement('h2');
  header.className = 'text-xl font-bold text-white bg-blue-900 p-2 rounded-t-lg';
  header.textContent = 'Notifications';

  const wrapper = document.createElement('div');
  wrapper.className = 'mt-4 h-52 overflow-hidden';

  const scrollContainer = document.createElement('div');
  scrollContainer.className = 'space-y-4 animate-scroll';

  const ul = document.createElement('ul');
  ul.className = 'space-y-4';
  notices.forEach((notice) => ul.appendChild(createNoticeElement(notice)));

  scrollContainer.appendChild(ul);
  wrapper.appendChild(scrollContainer);

  container.appendChild(header);
  container.appendChild(wrapper);
  return container;
};

// Render the correct version based on screen size
export const renderNoticeBoard = (selector) => {
  const target = document.querySelector(selector);
  if (!target) return console.error(`Element with selector ${selector} not found.`);

  const renderBoard = () => {
    target.innerHTML = ''; // Clear existing content
    const isLargeScreen = window.innerWidth >= 1368;
    const board = isLargeScreen ? LargeNoticeBoard() : SmallNoticeBoard();
    target.appendChild(board);
  };

  renderBoard();
  window.addEventListener('resize', renderBoard);
};
