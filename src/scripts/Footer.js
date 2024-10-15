import { createItemsContainer } from './itemContainer.js';
export function createFooterComponent() {
    // Main footer container
    const footer = document.createElement('footer');
    footer.classList.add('bg-blue-900', 'text-white');

    // Header section with title and button
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('md:flex', 'md:justify-between', 'md:items-center', 'sm:px-12', 'px-4', 'bg-[#133b7419]', 'py-7');

    const heading = document.createElement('h1');
    heading.classList.add('lg:text-4xl', 'text-3xl', 'md:mb-0', 'mb-6', 'lg:leading-normal', 'font-semibold', 'md:w-2/5');
    heading.innerHTML = 'Give <span class="text-teal-400">wings</span> to your dreams'; // HTML content

    const buttonContainer = document.createElement('div');
    const contactButton = document.createElement('button');
    contactButton.classList.add('bg-teal-400', 'hover:bg-teal-500', 'duration-300', 'px-5', 'py-2.5', 'font-[Popins]', 'rounded-md', 'text-white', 'md:w-auto', 'w-full');
    contactButton.textContent = 'Contact Us';

    buttonContainer.appendChild(contactButton);
    headerContainer.appendChild(heading);
    headerContainer.appendChild(buttonContainer);
    footer.appendChild(headerContainer);

    // Append the ItemsContainer
    footer.appendChild(createItemsContainer());  // Assuming the ItemsContainer is already defined

    // Modal logic
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center');
    modalOverlay.style.display = 'none'; // Initially hidden

    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-8', 'rounded-md', 'text-black', 'w-1/2');
    modalContent.innerHTML = '<h2>Contact Us</h2><p>Please fill in the form</p>'; // Placeholder content for the modal

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Event listener for the button to toggle the modal
    contactButton.addEventListener('click', function() {
        modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'flex' : 'none';
    });

    return footer;
}


