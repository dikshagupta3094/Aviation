
// Define a mapping object for sections and their corresponding buttons
const sectionMapping = {
  BBA: "data1",
  BcomR: "data2",
  BcomL: "data3",
};

// Function to handle visibility toggling
const toggleVisibility = (clickedId) => {
  Object.keys(sectionMapping).forEach((id) => {
    const section = document.getElementById(sectionMapping[id]);
    if (id === clickedId) {
      section.classList.remove("hidden");
      section.classList.add("block");
    } else {
      section.classList.remove("block");
      section.classList.add("hidden");
    }
  });
};

// Attach event listeners to each button
Object.keys(sectionMapping).forEach((id) => {
  const button = document.getElementById(id);
  button.addEventListener("click", () => toggleVisibility(id));
});
