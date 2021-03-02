// IPO Pattern for program design - Input -> Process -> Output

//State Variable
let parkData = {};

// cached element references - selected DOM elements/wrapping in money
let $fullName = $('#fullName');
let $states = $('#states');
let $designation = $('#designation');
let $description = $('#description');
let $directionsInfo = $('#directionsInfo');
let $weatherInfo = $('#weatherInfo');
let $moreInfo = $('#moreInfo');

let $input = $('input[type="text"]');

const API_Key = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
const Base_URL = "https://developer.nps.gov/api/v1/parks?q=" 

// event listeners/ event handler function
$('form').on("submit", handleSubmit);


// functions 

// Take input from user to search NPS API for results, render results for user or show error. 
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

//Display results. Right now the first '0' array is selected tos show the APi is linked. Ideally want to display first 40 results in a list. 


function render() {
        $fullName.text(parkData.data[0].fullName);
        $states.text(parkData.data[0].states);
        $designation.text(parkData.data[0].designation);
        $description.text(parkData.data[0].description);
        $directionsInfo.text(parkData.data[0].directionsInfo);
        $weatherInfo.text(parkData.data[0].weatherInfo);
         $moreInfo.text(parkData.data[0].url)
       ;
    }

    /*
 const cards = parkData.results.slice(10).map(function (parks) {
             return `
                <article data-url="${parkData.url}" class="card">
                    <h3>${parkData.fullName}</h3>
                </article>
            `;
 });
*/ 

   /*
    const cards = parkData.results.map(function (parks) {
             return `
                <article data-url="${parks.url}" class="card">
                    <h3>${parks.fullName}</h3>
                </article>
            `;
 });
    
    $collection.html(cards);

    */
/*
let parks = render.map;
console.log(parks);
*/

//array.map(function(currentValue, index, arr), thisValue)

/*
var array = [
    {id: 0, name: 'John', age: 20},
    {id: 1, name: 'Jane', age: 22},
    {id: 2, name: 'Bob', age: 24},
    {id: 3, name: 'Ana', age: 26},
];

var newArray = myArray.map(function(profile, index, myArr) {
    var newProfile = {
        'id': index,
        'name': profile.firstName,
        'age': profile.age
    }

    return newProfile
})

newArray.forEach(function(profile, index, myArr) {
    console.log(profile.fullName)
});

/*
Output:
    John
    Jane
    Bob
    Ana
*/

/*
const results = parkData.results.map(function (park) {
    return {
            $fullName.text(parkData.data[].fullName);
            $states.text(parkData.data[].states);
            $designation.text(parkData.data[].designation);
            $description.text(parkData.data[].description);
            $directionsInfo.text(parkData.data[].directionsInfo);
            $weatherInfo.text(parkData.data[].weatherInfo);
            $moreInfo.text(parkData.data[].url;

            $collection.html(cards);
        } 

  */
 
  
/*
let newList = parkData.map(selParks);

document.getElementsByClassName('Results-List').innerHTML = newList;

function selParks (value, index, array) {
    return 
}
*/

/*
//Trying to iterate over the array to display up to the limit of 40 results


function render() {

    if (parkData) {
        $fullName.text(parkData.data[i].fullName);
        $designation.text(parkData.data[i].designation);
        $description.text(parkData.data[i].description);
        $directionsInfo.text(parkData.data[i].directionsInfo);
        $weatherInfo.text(parkData.data[i].weatherInfo);
        $moreInfo.text(parkData.data[i].url)
        //};
};     
    } else {
        const cards = parkData.results.map(function (park) {
                return `;
            });

            $collection.html(cards);  
    }):
*/

/*
// Trying to make new array
let new_array = array.map(function callback(parkData[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
*/