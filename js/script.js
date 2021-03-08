
// IPO Pattern for program design - Input -> Process -> Output

$(function () {

    /*----- constants -----*/

    const API_KEY = "WeQkOhGU8MvgNRWVjqmbD8SDqYb7JSlREdUSf5uS";
    const BASE_URL = "https://developer.nps.gov/api/v1/parks?q=";

    /*----- app's state (variables) -----*/
    let parkData; 

    /*----- cached element references -----*/

    const $collection = $("#collection"); 
    let $input = $("input[type='text']");

    // Displayed on card 
    let $fullName = $("#fullName");

    // Displayed within card once selected
    let $states = $("#states");
    let $designation = $("#designation");
    let $description = $("#description");
    let $directionsInfo = $("#directionsInfo");
    let $weatherInfo = $("#weatherInfo");
    let $url = $("#url");

    /*----- event listeners -----*/

    $("form").on("submit", handleSubmit);

    /*----- functions -----*/

    /*----- Scroll to Top Button -----*/
        //Source: https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/

        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        var rootElement = document.documentElement;

        function scrollToTop() {
        // scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        scrollToTopBtn.addEventListener("click", scrollToTop);

    /*----- sticky function -----*/
    /*----- source: https://www.w3schools.com/howto/howto_js_sticky_header.asp  -----*/

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {mySticky()};

    // Get the header
    var up = document.getElementById("scrollToTopBtn");

    // Get the offset position of the navbar
    var sticky = up.offsetTop;

           // Made scroll to top button sticky.
     function mySticky() {
        if (window.pageYOffset > sticky) {
            scrollToTopBtn.classList.add("sticky");
        } else {
            scrollToTopBtn.classList.remove("sticky");
            }
        }

    /*----- User Input -----*/
    // Take input from user to search NPS API for results.  
    function handleSubmit(evt) {
        evt.preventDefault();
            const term = $input.val();
        $input.val("");
        $.ajax(BASE_URL + term + "&limit=40&api_key=" + API_KEY).then(function(data) {
        console.log("Park Data ", data);
        //Throws alert if no results.
        if (data.data.length === 0)  alert("Sorry, try again");
            parkData = data;
            render();
        }, function(error) {
            console.log("error ", error);
            alert("Sorry, try again");
            });
        }

     
    /*----- User Results -----*/
    //Displays resulting information for the returned parks in individual cards, along with the following text and the first image. Maps to a new array. 
    //Need to break text because URL exceeds card boundaries. 
    function render() {
        const cards = parkData.data.map(function(park) {
            return `
                <article data-info="${parkData}" class="card">
            
                <h2>${park.fullName }</h2>

                <img src="${park.images[0].url}" class="responsive" alt="${park.fullName}">
                <br>
 
                <p>State(s):</p>
                <p>${park.states}</p>
                
                <p>Designation: </p>
                <p>${park.designation}</p>
                
                <p>Description: </p>
                <p>${park.description}</p>
                
                <p>Directions: </p>
                <p>${park.directionsInfo}</p>
                
                <p>Weather Conditions: </p>
                <p id="break">${park.weatherInfo}</p>

                <p>Park Fees: </p>
                <p>${park.entranceFees[0].description}</p>
                
                <p>More Information: </p>
                <p><a href="${park.url}">Link to Website</a></p>

                </article>
                `;
            });
            $collection.html(cards);
        }

}); // IIFE Immediately Invoked Function Expression to protect global scope. Source - Daniel Scott