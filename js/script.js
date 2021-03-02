//State Variable
let parkData = [];

// cached element references - selected DOM elements/wrapping in money
let $fullName = $('#fullName');
let $designation = $('#designation');
let $description = $('#description');
let $directionsInfo = $('#directionsInfo');
let $weatherInfo = $('#weatherInfo');
let $input = $('input[type="text"]');

const API_Key = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const Base_URL = "https://developer.nps.gov/api/v1/parks?q=" 

// event listeners/ event handler function
$('form').on("submit", handleSubmit);


// functions 


function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $input.val("");
    $.ajax(Base_URL + term + "&limit=40&api_key=" + API_Key)
    .then(function(data) {
    console.log('Park Data ', data);
    parkData = data;
    render();
    }, function(error) {
    console.log('error ', error);
     alert("Sorry about that!");
    });
}


function render() {
        $fullName.text(parkData.data.array[0].fullName);
        //$designation.text(parkData.data[0].designation);
        //$description.text(parkData.data[0].description);
        //$directionsInfo.text(parkData.data[0].directionsInfo);
        //$weatherInfo.text(parkData.data[0].weatherInfo);
       ;
    }

    /*
    var new_array = array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
*/

    /*
const parkCards = parkData.results.map(function (parks) {
             return `
                <article data-url="${pokemon.url}" class="card">
                    <h3>${parkData.data[0].fullName}</h3>
                </article>
            `;
 });
 */