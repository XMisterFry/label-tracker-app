//dependency for products array
import {labels} from "./form-script.js";


let refFood= [
    {
        name : 'Medium Rasgulla',
        sugars : 14.52,

    },
    {
        name: 'Regular Chapati',
        carbs: 18
    },
    {
        name: 'Egg',
        protein: 6
    }
];


let searchInput=document.getElementById('search');
let searchBtn=document.getElementById('searchBtn');
let searchResultsDiv = document.getElementById('searchResults');
let cardsDisplayDiv=document.getElementById('searchResultsContainer');



// TESTING INPUT FETCH  searchBtn.onclick=function (){console.log(searchInput.value)};

//perspective ratios
function perspectiveRatios(product) {
        let ratios = {};
        let sugarRatio= Math.round((product.sugars/refFood[0].sugars)*100)/100;
        let carbsRatio=Math.round((product.carbs/refFood[1].carbs)*100)/100;
        let proteinRatio=Math.round(product.protein/refFood[2].protein);
        ratios.sugarPerspective = `contains as much Sugar as ${sugarRatio} times of a  ${refFood[0].name}` ;
        ratios.carbsPerspective=`contains as much Carbohydrates as ${carbsRatio} times of a  ${refFood[1].name}` ;
        if (proteinRatio>0) {
        ratios.proteinPerspective=`contains as much Protein as ${proteinRatio} times of an  ${refFood[2].name}`}
        else {ratios.proteinPerspective=""};
        return ratios;
        
};
console.log(perspectiveRatios(labels[1])); //checking perpective calcualtor

//making cards of products

function makeCard (filteredLabels) {
    cardsDisplayDiv.innerHTML="";

    filteredLabels.forEach((product) => {
    let productCard= document.createElement('div');
    productCard.classList.add('productCard');

    let perspective = perspectiveRatios(product);
    let productName=document.createElement('div');
    productName.innerText=`Name: ${product.name}`;

    let productSugar=document.createElement('div');
    productSugar.innerHTML=` 
    <p> Sugars: ${product.sugars} </p>
    <p>${perspective.sugarPerspective}</p>`;

    let productProtein=document.createElement('div');
    productProtein.innerHTML=`
    <p> Proteins : ${product.protein} </p>
    <p>${perspective.proteinPerspective}</p>`;

    let productCarbs=document.createElement('div');
    productCarbs.innerHTML=`
    <p>Carbs: ${product.carbs} </p>
    <p>${perspective.carbsPerspective}</p>`;

    
    
    cardsDisplayDiv.appendChild(productCard);
    productCard.appendChild(productName);
    productCard.appendChild(productSugar);
    productCard.appendChild(productCarbs);
    productCard.appendChild(productProtein);
   
    
    });
};


//showing related cards from search input

function searchResults(query) {
    query = query.toLowerCase();
    return labels.filter(label => label.name.toLowerCase().includes(query));
};


function showSearchDiv() {
    let query = searchInput.value.trim();
    let filteredLabels = searchResults(query);
    makeCard(filteredLabels);

    if (query !== "" && filteredLabels.length > 0) {
        searchResultsDiv.style.display = "flex"; 
    } else {
        searchResultsDiv.style.display = "none"; 
    }
};

searchBtn.addEventListener("click", showSearchDiv);


