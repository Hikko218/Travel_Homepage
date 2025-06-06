// Nav-bar and section management for a travel recommendation website

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => section.style.display = "none");
  
  const active = document.getElementById(sectionId);
  if (active) active.style.display = "block";
}
// contact form popup
document.getElementById("contact_form").addEventListener("submit", function (e) {
  e.preventDefault(); // verhindert echtes Absenden
  document.getElementById("popup").style.display = "block";
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("contact_form").reset();
}

// Fetching travel data from an API

const travel_recommendation_api = "travel_recommendation_api.json"

search_btn.addEventListener('click', searchdestination);

 
function searchdestination() {
    const searchInput = document.getElementById("search_btn").value.toLowerCase();
    
    
 

        fetch(travel_recommendation_api)
        .then(response => response.json())
         .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === searchInput);
    
        

        if (country) {
            const name = cities.name.join(', ');
            const imageurl = cities.imageurl.join(', ');
            const description = cities.description.join(', ');

        } 
        else {
            console.log('Condition not found.');
        }
        

        })


        

    }