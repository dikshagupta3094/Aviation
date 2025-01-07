// import { createItemsContainer } from "./itemContainer.js";
// export function createFooterComponent() {
//   // Main footer container
//   const footer = document.createElement("footer");
//   footer.classList.add("bg-blue-900", "text-white");

//   // Header section with title and button
//   const headerContainer = document.createElement("div");
//   headerContainer.classList.add(
//     "md:flex",
//     "md:justify-between",
//     "md:items-center",
//     "sm:px-12",
//     "px-4",
//     "bg-[#133b7419]",
//     "py-7"
//   );

//   const heading = document.createElement("h1");
//   heading.classList.add(
//     "lg:text-4xl",
//     "text-3xl",
//     "md:mb-0",
//     "mb-6",
//     "lg:leading-normal",
//     "font-semibold",
//     "md:w-2/5"
//   );
//   heading.innerHTML =
//     'Give <span class="text-teal-400">wings</span> to your dreams'; // HTML content

//   const buttonContainer = document.createElement("div");
//   const contactButton = document.createElement("button");
//   contactButton.classList.add(
//     "bg-teal-400",
//     "hover:bg-teal-500",
//     "duration-300",
//     "px-5",
//     "py-2.5",
//     "font-[Popins]",
//     "rounded-md",
//     "text-white",
//     "md:w-auto",
//     "w-full"
//   );
//   contactButton.textContent = "Contact Us";

//   buttonContainer.appendChild(contactButton);
//   headerContainer.appendChild(heading);
//   headerContainer.appendChild(buttonContainer);
//   footer.appendChild(headerContainer);

//   // Append the ItemsContainer
//   footer.appendChild(createItemsContainer()); // Assuming the ItemsContainer is already defined

//   // Modal logic
//   const modalOverlay = document.createElement("div");
//   modalOverlay.classList.add(
//     "fixed",
//     "inset-0",
//     "bg-black",
//     "bg-opacity-50",
//     "flex",
//     "justify-center",
//     "items-center"
//   );
//   modalOverlay.style.display = "none"; // Initially hidden

//   const modalContent = document.createElement("div");
//   modalContent.classList.add(
//     "bg-white",
//     "p-8",
//     "rounded-md",
//     "text-black",
//     "w-1/2",
//     "relative"
//   );

//   // Close icon
//   const closeIcon = document.createElement("button");
//   closeIcon.innerHTML = "&times;";
//   closeIcon.classList.add(
//     "absolute",
//     "top-2",
//     "right-4",
//     "text-2xl",
//     "font-bold",
//     "text-gray-600",
//     "hover:text-gray-900",
//     "cursor-pointer"
//   );
//   closeIcon.addEventListener("click", function () {
//     modalOverlay.style.display = "none";
//   });

//   modalContent.appendChild(closeIcon);

//   //heading
//   const contact = document.createElement("h2");
//   contact.innerHTML = "Contact Us";
//   contact.classList.add(
//     "text-center",
//     "font-bold",
//     "text-3xl",
//     "text-blue-700"
//   );
//   modalContent.appendChild(contact);

//   //Email
//   const emailId = document.createElement("p");
//   emailId.innerHTML = "Email: head.sathm@dauniv.ac.in";
//   emailId.classList.add("text-lg", "text-gray-700");
//   modalContent.appendChild(emailId);

//   //Address
//   const address = document.createElement("p");
//   address.innerHTML = "Address: Takshila Campus,Khandwa road Indore";
//   address.classList.add("text-lg", "text-gray-700");
//   modalContent.appendChild(address);

//   //Contact details
//   const contacts = [
//     "9098354300 (Mr. Anshul Jain)",
//     "8103586406 (Ms. Anamika Shukla)",
//     "8989456828 (Mr. Alok A. Jha)",
//     "For more details, contact Prof. Preeti Singh (Head, SATHM) 9425349044",
//   ];

//   contacts.forEach((contactDetail) => {
//     const contactItem = document.createElement("p");
//     contactItem.innerHTML = `Contact: ${contactDetail}`;
//     contactItem.classList.add("text-lg", "text-gray-700", "mb-2");
//     modalContent.appendChild(contactItem);
//   });

//   modalOverlay.appendChild(modalContent);
//   document.body.appendChild(modalOverlay);

//   // Event listener for the button to toggle the modal

//   contactButton.addEventListener("click", function () {
//     modalOverlay.style.display = "flex";
//   });

//   return footer;
// }

const modalOverlay = document.getElementById('modalOverlay');
const contactButton = document.getElementById('contactButton');
const closeIcon = document.getElementById('closeIcon');

contactButton.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});