
let urlParams = new URLSearchParams(window.location.search)
let name_1= urlParams.get("i")
const apiById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name_1}`
const UrlImg = "https://www.themealdb.com/images/ingredients/"
// -Small.png

async function getService(){
    try{
        const res = await fetch(apiById)
        const name_1 = await res.json()
        showService(name_1.meals[0])
    }
    catch(error){
        console.log(error)
    }
}
getService()

let maincontent = document.querySelector(".main-content")

function showService (data){
    let ingridients = ""
    for(let i=0;i<20;i++){
        let ingrid = data["strIngredient"+i]
        if(ingrid){
            ingridients+=`
            <div class="ingrid">
            <img src="${UrlImg+ingrid}-Small.png" alt="">
            <p>${ingrid}</p>
            </div>
            `
        }
    }

console.log(data)

    maincontent.innerHTML = `
    <div class="meal-container">
    <div class="meal-content">
    <img src="${data.strMealThumb}" alt="">
    </div>
    <div class="meal-info">
    ${ingridients}

    </div>
    </div>
    `
}






