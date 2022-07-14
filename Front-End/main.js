

let equipButton = document.querySelector("#Equipment-Button")
let bookButton = document.querySelector("#Book-Button")
let randButton = document.querySelector("#random-Button")
let floydButton = document.querySelector('#fmButton')
let mikeButton = document.querySelector('#mtButton')
let mannyButton = document.querySelector('#mpButton')
let caneloButton = document.querySelector('#caButton')
let muhammadButton = document.querySelector('#maButton')

let Mayweather = "https://www.youtube.com/watch?v=tA14uRHqqWs&ab_channel=DAZNBoxing"
let muhammadAli = "https://www.youtube.com/watch?v=1lvkeUjEMlA&ab_channel=PeterJohnson"
let mikeTyson = "https://www.youtube.com/watch?v=R2RxpsS639I&ab_channel=Jumber505"
let mannyPacquiao = "https://www.youtube.com/watch?v=FXYTqYtEsQQ&ab_channel=BOXINGChannel"
let canelo = "https://www.youtube.com/watch?v=51LorPZ6YiE&ab_channel=DAZNBoxing"

let links = [Mayweather, muhammadAli, mikeTyson, mannyPacquiao, canelo]


function randomButton (event) {
     const boxer = links[Math.floor(Math.random()*5)] 
    window.location.href= boxer
}

function equipmentButton (event) {
    window.location.href="https://www.amazon.com/Odoland-Punching-UNFILLED-Boxing-Hanging/dp/B0814HSSZJ/ref=sr_1_1?crid=25DZECD21SZ2A&keywords=essential+boxing+kit&qid=1657560481&sprefix=essential+boxing+kit%2Caps%2C51&sr=8-1"  
}

function booksButton (event) {
    window.location.href="https://www.amazon.com/Greatest-Ever-Boxing-Workouts-Mayweather-ebook/dp/B00AWR8RN8/ref=sr_1_1?crid=1ZNMYM3C28BAT&keywords=Greatest+ever+boxing+workouts&qid=1657562253&sprefix=greatest+ever+boxing+workouts%2Caps%2C54&sr=8-1"  
}



/////////////////////////////////////////////
function fmButton (event) {
    axios.post('/addvote?boxer_id=1',{})
    .then(() =>{
        populateVote()

    })
}

function mtButton (event) {
    axios.post('/addvote?boxer_id=2',{})
    .then(() =>{
        populateVote()
    })
}

function mpButton (event) {
    axios.post('/addvote?boxer_id=3',{})
    .then(() =>{
        populateVote()
    })
}

function caButton (event) {
    axios.post('/addvote?boxer_id=4',{})
    .then(() =>{
        populateVote()
    })
}
    function maButton (event) {
    axios.post('/addvote?boxer_id=5',{})
    .then(() =>{
        populateVote()
    })
}
/////////////////////////////////////////////





function populateVote() {
    axios.get('/getboxers')
    .then((data) =>{

        let boxers = data.data[0]
console.log(boxers)

        document.getElementById('boxer_id_1')
        .innerHTML=boxers[0].totalvotes
        document.getElementById('boxer_id_2')
        .innerHTML=boxers[1].totalvotes
        document.getElementById('boxer_id_3')
        .innerHTML=boxers[2].totalvotes
        document.getElementById('boxer_id_4')
        .innerHTML=boxers[3].totalvotes
        document.getElementById('boxer_id_5')
        .innerHTML=boxers[4].totalvotes
        
        

    })
}








floydButton.addEventListener('click', fmButton)
equipButton.addEventListener('click',equipmentButton)
bookButton.addEventListener('click',booksButton)
randButton.addEventListener('click',randomButton)

floydButton.addEventListener('click', fmButton)
mikeButton.addEventListener('click',mtButton)
mannyButton.addEventListener('click',mpButton)
caneloButton.addEventListener('click',caButton)
muhammadButton.addEventListener('click',maButton)




