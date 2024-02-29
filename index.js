let urlParams= new URLSearchParams (window.location.search)
let name_1 = urlParams.get("f")
let name_2 = urlParams.get("s")
let showName = "f"
let showA = "a"
if(name_1){
    showName = "f"
    showA = name_1
}
if(name_2){
    showName = "s"
    showA = name_2
}

let input = document.querySelector(".searchbtn")
document.addEventListener("keydown",(event)=>{
    if(event.keyCode ===13){
        let small = input.value.toLowerCase().trim()
        window.location.href= `index.html?s=${small}`
    }
})









const API = `https://www.themealdb.com/api/json/v1/1/search.php?${showName}=${showA}`
async function getService (){
    try{
        const res = await fetch(API)
        const data = await res.json()
       
        showService(data.meals)
        
    }
    catch(error){
        console.log(error)
    }
}
getService()

let meals = document.querySelector(".meals")

function showService (data){
  let showData = data.map((item)=>{
    return    `
    <div onclick="fotoMeal('${item.idMeal}')" class="image-content">
    <img src="${item.strMealThumb}" alt="">
    <p>${item.strMeal}</p>
    </div>
    `
  })
  meals.innerHTML = showData.join("")
}

let letter = document.querySelector(".letter")
let arrayLetter = ["A", "B", "C" , "D" , "E" , "F" ," G" ," H" ," I" ," J" ," K" ," L" ," M" ," N" ," O" ," P" ," Q" ," R" ," S" ," T" ," U" ," V" ," W" ," X" ," Y" ," Z"]

letter.innerHTML = arrayLetter.map((item)=>{
    return  `
    <a onclick="showMeal('${item}')">${item}  /</a>
    `
})

function showMeal (item){


    let small = item.toLowerCase().trim()
    window.location.href = `index.html?f=${small}`
}
function fotoMeal (id){
window.location.href=`meal.html?i=${id}`
}