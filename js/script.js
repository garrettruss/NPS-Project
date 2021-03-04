
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

// Take input from user to search NPS API for results,
// Need to get alert when array is empty (no matches). 
function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $input.val("");
    $.ajax(BASE_URL + term + "&limit=40&api_key=" + API_KEY)
    .then(function(data) {
    console.log('Park Data ', data);
    parkData = data;
    render();
    }, function(error) {
        console.log('error ', error);
        alert("Sorry about that!");
    });
}

//Displays results of parks.
function render() {
    const cards = parkData.data.map(function(park) {
           return `
            <article data-info="${parkData}" class="card">
                <br>
                <h2 = name>${park.fullName }</h2>
                <br>
                <p>State: </p>
                <br>
                <p>${park.states}</p>
                <br>
                <p>Designation: </p>
                <br>
                <p>${park.designation}</p>
                <br>
                <p>Description: </p>
                <br>
                <p>${park.description}</p>
                <br>
                <p>Directions: </p>
                <br>
                <p>${park.directionsInfo}</p>
                <br>
                <p>Weather Conditions: </p>
                <br>
                <p>${park.weatherInfo}</p>
                <br>
                <p>More Info: </p>
                <br>
                <p><a href="${park.url}">Link to Website</a></p>
                <br>
            </article>
            `;
    });
    $collection.html(cards);
}