//Javascript for handling toggle between MBA tourism 2years and MBA tourism 5 years

const t2 = document.getElementById("toursim2");
const t1 = document.getElementById("toursim1");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");

t1.addEventListener("click", () => {
  data1.classList.remove("hidden");
  data2.classList.add("hidden");
});

t2.addEventListener("click", () => {
  data2.classList.remove("hidden");
  data1.classList.add("hidden");
});
