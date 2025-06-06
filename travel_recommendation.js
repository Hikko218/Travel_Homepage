
// Nav-bar and section management 

function showSection(sectionId) {
  const sections = document.querySelectorAll("#homeContent, #aboutContent, #contactContent, #search_results");
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

//input normalization function

function normalize(str) {
return str.trim().toLowerCase().replace(/\s+/g, "");
}

// Fetching travel data from an API

const travel_recommendation_api = "travel_recommendation_api.json";             // API endpoint        

search_btn.addEventListener('click', searchdestination);                                              
 
function searchdestination() {
       
        fetch(travel_recommendation_api)
        .then(response => response.json())
         .then(data => {
            const searchInput = normalize(document.getElementById("search_input").value);
            const matches = [];
            document.getElementById("search_input").value = "";                   // Clear previous search input

            const resultsContainer = document.getElementById("search_results");
            resultsContainer.innerHTML = "";                                      // clear previous results

            // Countries search

            if (["city", "cities", "country", "countries"].includes(searchInput)) {
            data.countries.forEach(c => c.cities.forEach(city => matches.push(city)));
            } else {
            data.countries.forEach(c =>
            c.cities.forEach(city => {
            if (normalize(city.name).includes(searchInput)) matches.push(city);
                })
              );
            }

            // Temples search

            if (["temple", "temples"].includes(searchInput)) {
            matches.push(...data.temples);
            } else {
            data.temples.forEach(temple => {
            if (normalize(temple.name).includes(searchInput)) matches.push(temple);
            });
            }

            // Beaches search

            if (["beach", "beaches"].includes(searchInput)) {
            matches.push(...data.beaches);
            } else {
            data.beaches.forEach(beach => {
            if (normalize(beach.name).includes(searchInput)) matches.push(beach);
            });
            }

            // Displaying results

            if (matches.length > 0) {
            resultsContainer.style.display = "block";

            matches.forEach(beach => {
            const { name, imageUrl, description } = beach;

            console.log(name, imageUrl, description);
            
            resultsContainer.innerHTML += `
                <div class="search_results">
                    <img src="${imageUrl}" class="destination_img" alt="${name}">
                    <h1 class="search_headline">${name}</h1>
                    <p>${description}</p>
                    <button class="visit_btn" >Visit</button>
                </div>
                `;
            });   
            }

        // Error handling for no matches 

        else {
            console.log('No matches found.');
            }
        })

    } 

// Clear button functionality

  document.getElementById("clear_btn").addEventListener("click", function() {
  document.getElementById("search_input").value = "";
  document.getElementById("search_results").innerHTML = "";
  document.getElementById("search_results").style.display = "none";
  });
    
  
