export function createItemComponent(Links, title) {
    // Create the main container element (ul)
    const ulElement = document.createElement('ul');
    ulElement.classList.add('text-left');

    // Create and append the title (h1)
    const titleElement = document.createElement('h1');
    titleElement.classList.add('mb-1', 'font-semibold');
    titleElement.textContent = title;
    ulElement.appendChild(titleElement);

    // Iterate through the Links array and create list items
    Links.forEach((link) => {
        // Create a list item (li)
        const liElement = document.createElement('li');

        // Create the anchor (a) tag
        const anchorElement = document.createElement('a');
        anchorElement.classList.add('text-gray-400', 'hover:text-teal-400', 'duration-300', 'text-sm', 'cursor-pointer');
        anchorElement.href = link.link;
        anchorElement.textContent = link.name;

        // Conditionally add the download attribute if isDownload is true
        if (link.isDownload) {
            anchorElement.setAttribute('download', link.name);
        }

        // Append the anchor to the list item
        liElement.appendChild(anchorElement);

        // Append the list item to the ul element
        ulElement.appendChild(liElement);
    });

    // Return the completed component
    return ulElement;
}


