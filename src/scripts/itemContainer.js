import { Admission, Miscellaneous, Downloads, DigitalLibrary } from './Menus.js';
import { createItemComponent } from './item.js';
export function createItemsContainer() {
    // Main container
    const container = document.createElement('div');
    container.classList.add('bg-blue-950', 'p-0');

    // Inner grid container with background image
    const gridContainer = document.createElement('div');
    gridContainer.classList.add(
        'md:bg-[url("./assets/final_bg.jpg")]',
        'mt-0', 'mb-0', 'bg-no-repeat', 'bg-[length:15%_auto]',
        '-z-0', 'bg-center', 'bg-blue-950',
        'grid', 'grid-cols-1', 'sm:grid-cols-3', 'lg:grid-cols-4',
        'gap-6', 'sm:px-10', 'px-5', 'py-16', 'ml-10', 'mr-10'
    );

    // Adding the Item components
    gridContainer.appendChild(createItemComponent(Admission, 'Admission'));
    gridContainer.appendChild(createItemComponent(Miscellaneous, 'Miscellaneous'));
    gridContainer.appendChild(createItemComponent(Downloads, 'Downloads'));
    gridContainer.appendChild(createItemComponent(DigitalLibrary, 'Digital Library'));

    // Append gridContainer to main container
    container.appendChild(gridContainer);

    // Horizontal rule (hr) element
    const hrElement = document.createElement('hr');
    hrElement.classList.add('mt-8', 'border-t-1', 'border-gray-400', 'w-[90%]', 'mx-auto', 'z-10');
    container.appendChild(hrElement);

    // Footer container
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('text-gray-400', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-20', 'sm:px-20', 'px-20', 'py-5');

    // Creating sample footer content (adjust according to actual JSX)
    const ulElement = document.createElement('ul');
    ulElement.classList.add('text-left');
    const liElement = document.createElement('li');
    liElement.textContent = 'Sample footer content';  // Replace with actual footer content
    ulElement.appendChild(liElement);
    footerContainer.appendChild(ulElement);

    container.appendChild(footerContainer);

    return container;
}


