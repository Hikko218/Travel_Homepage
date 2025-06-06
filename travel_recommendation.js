// Nav-bar and section management for a travel recommendation website

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => section.style.display = "none");
  
  const active = document.getElementById(sectionId);
  if (active) active.style.display = "block";
}

document.getElementById("contact_form").addEventListener("submit", function (e) {
  e.preventDefault(); // verhindert echtes Absenden
  document.getElementById("popup").style.display = "block";
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("contact_form").reset();
}