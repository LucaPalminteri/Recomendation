// local reviews data

const reviews = [
{
    id: 1,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "person-1.jpg",
    text: "I'm a web developer of this company and I really like cats and movies"
},
{
    id: 2,
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    img: "https://www.hola.com/imagenes/estar-bien/20210706192625/personalidad-adultos-altas-capacidades-psicologia/0-974-472/altas-capacidades-m.jpg?filter=w500",
    text: "I really like to go outside on a cold day, I like to watch wolves eatting other wolves"
},
{
    id: 3,
    name: "Peter Jones",
    job: "INTERN",
    img: "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg",
    text: "I'm Peter Jones, and I'm an intern. I strarted to work here just for beggin my carrer as a developer"
}, {
    id: 4,
    name: "Bill Anderson",
    job: "THE BOSS",
    img: "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
    text: "I'm the boss of this company, and I do whatever I want whenever I want, cause I'm the fooking BOSS"
},
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson();
})

// show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
}) 

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1 ;
    }
    showPerson();
})

// show random person
randomBtn.addEventListener('click', function(){
    
    currentItem = getRandomNumber();
    console.log();
    showPerson();
   
})

function getRandomNumber() {
	return Math.floor(Math.random() * reviews.length);
}
