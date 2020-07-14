"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
    html += '</div>';
    return html
}
// function changeFontColor(){
//     document.getElementById("coffees").style.color = "red";
//
// }

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    if (e) e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var regex = new RegExp(search.value, 'gi');
    coffees.forEach(function(coffee) {
        if(regex.test(coffee.name) && (coffee.roast === selectedRoast || selectedRoast === "")){
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
function changeFontColor(){
    document.getElementById("coffees").fontcolor( "blue" );
}

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var submitButtonAdd = document.querySelector('#submitAdd');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
// submitButtonAdd.addEventListener('click', updateCoffees);


//alternate code for adding the All select option
// if(selectedRoast === "All"){
//
//     filteredCoffees.push(coffee);
// }
// else if (coffee.roast === selectedRoast) {
//     filteredCoffees.push(coffee);
// }

//add coffee function
// function addCoffee(name,roast){
//     if(modalName.checkValidity())
//         coffees.push({id: coffees.length + 1, name: name, roast: roast})
// }
// modalName.innerHTML = renderCoffees.push(addCoffee());