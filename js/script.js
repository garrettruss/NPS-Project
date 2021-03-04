//alert('JS is Loaded');

// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const API_KEY = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const BASE_URL = "https://developer.nps.gov/api/v1/parks?q=";

/*----- app's state (variables) -----*/
let parkData; 
// detailData;

/*----- cached element references -----*/

const $collection = $('#collection'); 
// const $modal = $('.modal');
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
// $collection.on('click', 'article.card', handleClick); 

/*----- functions -----*/
/*
function handleClick() {
        console.log(this.dataset)
        $modal.modal();
    }
*/


// Take input from user to search NPS API for results, render results for user or show error. 
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

//Displays results of parks in card format for users to click into and see more details.
function render() {
    const cards = parkData.data.map(function(park) {
           return `
            <article data-info="${parkData}" class="card">
                <h3 = name>${park.fullName}</h3>
                br
    
                <p>${park.designation}</p>
                <p>${park.description}</p>
                <p>${park.directionsInfo}</p>
                <p>${park.weatherInfo}</p>
                <p>${park.url}</p>
            </article>
            `;
    });
    $collection.html(cards);
}
  


/*
// V1


   $states.text(data.states);
        $designation.text(data.designation);
        $description.text(data.designation);
        $directionsInfo.text(directionsInfo);
        $weatherInfo.text(weatherInfo);
        $moreInfo.text(moreInfo);


//Display park info in popup of card. 
function handeClick(evt) {
        $modal.modal();
    } function(error) {
        console.log(error);
    };
*/ 

/*
     $.ajax(this.dataset)
          $states.text(data.states);
        $designation.text(data.designation);
        $description.text(data.designation);
        $directionsInfo.text(directionsInfo);
        $weatherInfo.text(weatherInfo);
        $moreInfo.text(moreInfo);
        console.log(data)
    .then(function(data) {

//V2 
//Display park info in popup of card. 
function handeClick() {
    const modalCards = parkData.data.map(function(park) {
        return `
        <article class="modalcard">
        $states.text(data.states);
        $designation.text(data.designation);
        $description.text(data.designation);
        $directionsInfo.text(directionsInfo);
        $weatherInfo.text(weatherInfo);
        $moreInfo.text(moreInfo);
        console.log(data);
        $modal.modal();
        </article>
        `;
    });
    $modal-container.html(modalCards);
}
*/
