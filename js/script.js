//alert('JS is Loaded');

// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const API_KEY = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const BASE_URL = "https://developer.nps.gov/api/v1/parks?q=";

// const NEW_URL = "https://developer.nps.gov/api/v1/parks?&limit=40&api_key=WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS"; 

/*----- app's state (variables) -----*/
let parkData; 

/*----- cached element references -----*/

const $collection = $('#collection'); 


//V1 

let $fullName = $('#fullName');
//let $states = $('#states');
//let $designation = $('#designation');
//let $description = $('#description');
//let $directionsInfo = $('#directionsInfo');
//let $weatherInfo = $('#weatherInfo');
//let $moreInfo = $('#moreInfo');
let $input = $('input[type="text"]');


/*----- event listeners -----*/

$('form').on("submit", handleSubmit);


/*----- functions -----*/
/*
//exectues all initial actions when page loads
function init () {
    //Gather all park data when page loads. 
    getData();
}

//V2
//Display parks in a card format. Next step is to make it clickable to display further information. 
function getData() {
    $.ajax(NEW_URL)
    .then(function(data) { 
        console.log('data: ', data);
        // assign data to global accesible var
        parkData = data;
        // update DOM with the data
        render(); 

    }, function(error) {
        console.log('error: ', error);
    });
}
*/ 


//V1 
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



// V1
//Display results. Right now the first '0' array is selected tos show the API is linked. Ideally want to display first 15 or so results in a list. 

function render() {
    //new
    const cards = parkData.data.map(function(park) {
           return `
        <article class="card">
                <h3>${park.fullName}</h3>
            </article>
            `;
    });
    $collection.html(cards);
}

/*
V1 fields 
        $fullName.text(parkData.data[0].fullName);
        $states.text(parkData.data[0].states);
        $designation.text(parkData.data[0].designation);
        $description.text(parkData.data[0].description);
        $directionsInfo.text(parkData.data[0].directionsInfo);
        $weatherInfo.text(parkData.data[0].weatherInfo);
         $moreInfo.text(parkData.data[0].url)
       ;
    }
*/


/*
//V2
function render() {
    const cards = parkData.data.map(function(park) {
        return `
        <article class="card">
                <h3>${park.fullName}</h3>
            </article>
            `;
    });
    $collection.html(cards);
}
*/