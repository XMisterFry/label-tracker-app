export let labels =[
    {
        name : "Gooday Cashew Biscuits",
        sugars : 2.75,
        carbs : 8.46,
        protein: 0,
    },
    { 
        name: "Haldiram Aloo Bhujia",
        sugars : 2,
        carbs: 30,
        protein:19
    },
    {
        name: 'Yoga Protein Bar',
        protein: 7.8,
        carbs: 31.1,
        sugars: 7.9
    },
    {
        name: 'Hamdard Rooh Afza',
        protein: 0.154,
        carbs : 36.05,
        sugars : 35.56
    }
];


class formLabels {
    constructor (name,sugars,carbs,protein) {
        this.name=name;
        this.sugars=sugars;
        this.carbs=carbs;
        this.protein=protein;
    }
};


// labels.push(new formLabels("Haldiram Moong Dal", 1,1,1)); //testing construvtor works
// console.log(labels);  //testing


//taking contributions and pushing to array


function collectForm (event){
    event.preventDefault();
    let form = document.getElementById('labelFormfields');
    let name=document.getElementById('brand').value.trim();
    let sugars=document.getElementById('sugars').value;
    let carbs=document.getElementById('carbs').value;
    let proteins=document.getElementById('proteins').value;

    let newLabel= new formLabels (name,sugars,carbs,proteins);
    labels.push(newLabel);
    let submitMsg=document.createElement('p');
    submitMsg.textContent='Thanks for Submitting the Label';
    submitMsg.style.color = "green";
    form.appendChild(submitMsg);
    form.reset();
    setTimeout(() => {
        submitMsg.style.display = "none"; 
    }, 2000);
    
};

let submitBtn= document.getElementById('submitBtn');
submitBtn.addEventListener('click',collectForm);

console.log(labels);