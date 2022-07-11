let equipButton = document.querySelector("#Equipment-Button")
let bookButton = document.querySelector("#Book-Button")
let randButton = document.querySelector("#random-Button")

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










equipButton.addEventListener('click',equipmentButton)
bookButton.addEventListener('click',booksButton)
randButton.addEventListener('click',randomButton)






