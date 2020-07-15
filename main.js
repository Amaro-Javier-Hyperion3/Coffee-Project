"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + " - " + coffee.roast + '</div>';
    html += '</div>';
    return html
}

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
    {id: 1, name: 'JuniorDevBrew', roast: 'light'},
    {id: 2, name: 'halfDay', roast: 'light'},
    {id: 3, name: 'spicyJoe', roast: 'light'},
    {id: 4, name: 'commuter', roast: 'medium'},
    {id: 5, name: 'averageJoe', roast: 'medium'},
    {id: 6, name: 'keyboardSlammer', roast: 'medium'},
    {id: 7, name: 'mtEverest', roast: 'dark'},
    {id: 8, name: 'johnWick', roast: 'dark'},
    {id: 9, name: 'arthritisKiller', roast: 'dark'},
    {id: 10, name: 'blackGoldRush', roast: 'dark'},
    {id: 11, name: 'seniorDevBrew', roast: 'dark'},
    {id: 12, name: 'allNighter', roast: 'dark'},
    {id: 13, name: 'fullSyntheticOil', roast: 'dark'},
    {id: 14, name: 'rageFest', roast: 'dark'},
];

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


//add coffee function
// function addCoffee(name,roast){
//     if(modalName.checkValidity())
//         coffees.push({id: coffees.length + 1, name: name, roast: roast})
// }
// modalName.innerHTML = renderCoffees.push(addCoffee());