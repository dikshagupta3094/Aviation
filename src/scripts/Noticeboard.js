// Sample Notices Data
const notices = [
    {
      id: 1,
      title: 'Exam Schedule for Semester 2024',
      date: 'September 15, 2024',
      description:
        'The final exam schedule for the semester is now available. Please check the university portal for details.',
    },
    {
      id: 2,
      title: 'New Library Hours',
      date: 'September 10, 2024',
      description:
        'The library will now be open from 8 AM to 10 PM on weekdays and 9 AM to 5 PM on weekends.',
    },
  ];
  
  // Create the Large Noticeboard Layout
  function createLargeNoticeBoard() {
    const container = document.createElement('div');
    container.className =
      "flex box-shadow bg-[url('./assets/Home/ticket.svg')] bg-cover bg-center overflow-hidden rounded-lg p-4 lg:w-[75%] lg:h-96 mt-10 mb-10";
  
    const innerDiv = document.createElement('div');
    innerDiv.className = 'w-96 ml-40 my-16 overflow-hidden';
  
    const marquee = document.createElement('marquee');
    marquee.className = 'h-52';
    marquee.setAttribute('scrollamount', '4');
    marquee.setAttribute('direction', 'up');
  
    marquee.addEventListener('mouseover', () => marquee.stop());
    marquee.addEventListener('mouseout', () => marquee.start());
  
    const ul = document.createElement('ul');
    ul.className = 'space-y-4';
  
    notices.forEach((notice) => {
      const li = document.createElement('li');
      li.className = 'border-b w-full pb-4';
  
      const title = document.createElement('h3');
      title.className = 'text-lg font-semibold text-blue-900';
      title.textContent = notice.title;
  
      const date = document.createElement('p');
      date.className = 'text-sm text-gray-500';
      date.textContent = notice.date;
  
      const description = document.createElement('p');
      description.className = 'text-gray-700 mt-2';
      description.textContent = notice.description;
  
      li.appendChild(title);
      li.appendChild(date);
      li.appendChild(description);
      ul.appendChild(li);
    });
  
    marquee.appendChild(ul);
    innerDiv.appendChild(marquee);
    container.appendChild(innerDiv);
  
    return container;
  }
  
  // Create the Small Noticeboard Layout
  function createSmallNoticeBoard() {
    const container = document.createElement('div');
    container.className = 'box-shadow p-4 bg-white shadow-md rounded-lg';
  
    const header = document.createElement('h2');
    header.className =
      'text-xl font-bold text-white bg-blue-900 p-2 rounded-t-lg';
    header.textContent = 'Notifications';
  
    const contentDiv = document.createElement('div');
    contentDiv.className = 'mt-4 space-y-4';
  
    const marquee = document.createElement('marquee');
    marquee.setAttribute('direction', 'up');
  
    const ul = document.createElement('ul');
    ul.className = 'space-y-4';
  
    notices.forEach((notice) => {
      const li = document.createElement('li');
      li.className = 'border-b w-full pb-4';
  
      const title = document.createElement('h3');
      title.className = 'text-lg font-semibold text-blue-900';
      title.textContent = notice.title;
  
      const date = document.createElement('p');
      date.className = 'text-sm text-gray-600';
      date.textContent = notice.date;
  
      const description = document.createElement('p');
      description.className = 'text-blue-950 mt-2';
      description.textContent = notice.description;
  
      li.appendChild(title);
      li.appendChild(date);
      li.appendChild(description);
      ul.appendChild(li);
    });
  
    marquee.appendChild(ul);
    contentDiv.appendChild(marquee);
    container.appendChild(header);
    container.appendChild(contentDiv);
  
    return container;
  }
  
  // Render the appropriate noticeboard based on screen size
  export function renderNoticeBoard() {
    const container = document.getElementById('noticeboard-container');
  
    if (window.innerWidth >= 1368) {
      container.appendChild(createLargeNoticeBoard());
    } else {
      container.appendChild(createSmallNoticeBoard());
    }
  }
  
  // Re-render the noticeboard on window resize for responsiveness
  window.addEventListener('resize', () => {
    const container = document.getElementById('noticeboard-container');
    container.innerHTML = ''; // Clear previous content
    renderNoticeBoard(); // Render the appropriate version
  });
  
  // Initial render when DOM is ready
  document.addEventListener('DOMContentLoaded', renderNoticeBoard);
  