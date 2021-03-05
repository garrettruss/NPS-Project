
// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const API_KEY = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const BASE_URL = "https://developer.nps.gov/api/v1/parks?q=";

/*----- app's state (variables) -----*/
let parkData; 

/*----- cached element references -----*/

const $collection = $('#collection'); 
let $input = $('input[type="text"]');

// Displayed on card 
let $fullName = $('#fullName');

// Displayed within card once selected
let $states = $('#states');
let $designation = $('#designation');
let $description = $('#description');
let $directionsInfo = $('#directionsInfo');
let $weatherInfo = $('#weatherInfo');
let $url = $('#url');

/*----- event listeners -----*/

$('form').on("submit", handleSubmit);

// Take input from user to search NPS API for results. If no match, alert message appears.  
function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $input.val("");
    $.ajax(BASE_URL + term + "&limit=40&api_key=" + API_KEY).then(function(data) {
    console.log('Park Data ', data);
    if (data.data.length === 0)  alert("Sorry, try again!");
    parkData = data;
    render();
    }, function(error) {
        console.log('error ', error);
        alert("Sorry, try again")
    });
}

//Displays resulting information for the returned parks in individual cards, along with the following text.
function render() {
    const cards = parkData.data.map(function(park) {
           return `
            <article data-info="${parkData}" class="card">
            
                <h2 = name>${park.fullName }</h2>

                <p>State(s):</p>
                <p>${park.states}</p>
                
                <p>Designation: </p>
                <p>${park.designation}</p>
                
                <p>Description: </p>
                <p>${park.description}</p>
                
                <p>Directions: </p>
                <p>${park.directionsInfo}</p>
                
                <p>Weather Conditions: </p>
                <p>${park.weatherInfo}</p>
                
                <p>More Information: </p>
                <p><a href="${park.url}">Link to Website</a></p>

                <img src="${park.images[0].url}" class="parkpic" alt="${park.fullName}">
                
            </article>
            `;
    });
    $collection.html(cards);
}