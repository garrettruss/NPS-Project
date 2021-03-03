//alert('JS is Loaded');

// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const API_KEY = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const BASE_URL = "https://developer.nps.gov/api/v1/parks?q=";

/*----- app's state (variables) -----*/
let parkData; 

/*----- cached element references -----*/

const $collection = $('#collection'); 
const $modal = $('.modal');


let $input = $('input[type="text"]');

// Displayed on card 
let $fullName = $('#fullName');

// Displayed within card once selected
let $states = $('#states');
let $designation = $('#designation');
let $description = $('#description');
let $directionsInfo = $('#directionsInfo');
let $weatherInfo = $('#weatherInfo');
let $moreInfo = $('#moreInfo');

/*----- event listeners -----*/

$('form').on("submit", handleSubmit);
$collection.on('click', 'article.card', handeClick);

/*----- functions -----*/

// Take input from user to search NPS API for results, render results for user or show error. 
function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $input.val("");
    $.ajax(BASE_URL + term + "&limit=30&api_key=" + API_KEY)
    .then(function(data) {
    console.log('Park Data ', data);
    parkData = data;
    render();
    }, function(error) {
    console.log('error ', error);
     alert("Sorry about that!");
    });
}

//Displays results of parks in card format for users to click into and see more details.
function render() {
    const cards = parkData.data.map(function(park) {
           return `
        <article data-info="${park.data}" class="card">
                <h3>${park.fullName}</h3>
            </article>
            `;
    });
    $collection.html(cards);
}

//Display park info in popup of card. 
function handeClick() {
    $.ajax(this.dataset)
    .then(function(data) {
        $states.text(data.states);
        $designation.text(data.designation);
        $description.text(data.designation);
        $directionsInfo.text(directionsInfo);
        $weatherInfo.text(weatherInfo);
        $moreInfo.text(moreInfo);
        console.log(data)
        $modal.modal();
    }, function(error) {
        console.log(error);
    });
}








   