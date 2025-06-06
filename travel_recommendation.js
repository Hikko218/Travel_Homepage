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
    const searchInput = document.getElementById("search_input").value.toLowerCase();
    
    
 

        fetch(travel_recommendation_api)
        .then(response => response.json())
         .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === searchInput);
            //const temple  = data.temples.find(item => item.temples.toLowerCase() === searchInput);
            //const beach   = data.beaches.find(item => item.temples.toLowerCase() === searchInput);
        

        if (country) {
            country.cities.forEach(city => {
            const name = city.name;
            const imageUrl = city.imageUrl;
            const description = city.description;

            console.log(name, imageUrl, description);
             // Display the results in the UI
            document.getElementById("search_results").innerHTML += `
                <div id="image_container">
                    <img src="${imageUrl}" alt="${name}">
                </div>
                 <div id="destination_info">
                    <h1>${name}</h1>
                    <p>${description}</p>
                </div>
            `;
         });
        } else if (temple) {
            temple.forEach(temple => {
            const name = temple.name;
            const imageUrl = temple.imageUrl;
            const description = temple.description;

            console.log(name, imageUrl, description);

             // Display the results in the UI
            document.getElementById("search_results").innerHTML += `
                <div id="image_container">
                    <img src="${imageUrl}" alt="${name}">
                </div>
                 <div id="destination_info">
                    <h1>${name}</h1>
                    <p>${description}</p>
                </div>
            `;
              });
          } else if (beach) {
            beach.forEach(beach => {
            const name = beach.name;
            const imageUrl = beach.imageUrl;
            const description = beach.description;

            console.log(name, imageUrl, description);
            
            // Display the results in the UI
            document.getElementById("search_results").innerHTML += `
                <div id="image_container">
                    <img src="${imageUrl}" alt="${name}">
                </div>
                 <div id="destination_info">
                    <h1>${name}</h1>
                    <p>${description}</p>
                </div>
            `;

        }); 
        } else {
            console.log('Country not found.');
            }
        })

    }       
  
