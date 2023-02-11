const features = document.getElementById("features");
const featuresDropdown = document.querySelector("ul.features-1");
const company = document.getElementById("company");
const companyDropdown = document.querySelector("ul.company-1");

features.addEventListener("click", () => {
  featuresDropdown.classList.toggle("reveal1");
})

company.addEventListener("click", () => {
  companyDropdown.classList.toggle("reveal2");
});



