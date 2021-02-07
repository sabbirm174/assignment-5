const singleMil = document.getElementsByClassName("meal-item");
const mealList = document.getElementById("meal")
const personal = document.getElementById("personal")
const searchBtn = document.getElementById("search");
document.getElementById("example");
searchBtn.addEventListener("click", getMeal);

function getMeal(){
    let searchInputText = document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
    .then(res => res.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div onclick="mealItem('${meal.idMeal}')" class="p-3 text-center meal-item">
                    <div class="" data-id = "${meal.idMeal}>
                        <div class="img pb-2">
                            <img src="${meal.strMealThumb}" alt="">
                        </div>
                        <div class="caption meal-info">
                            <h5>${meal.strMeal}</h5>
                        </div>
                    </div>
                </div>
                `;
            });
        }
        mealList.innerHTML = html;
    });
};

const mealItem=(name)=>{
    const url =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data.meals[0]));
}

const foodDetails= (foodInfo) =>{
    if(foodInfo){
        console.log(foodInfo)
        const foodInf = document.getElementById('food-details');
        foodInf.innerHTML = `
        <img src="${foodInfo.strMealThumb}" alt="">
        <h1>${foodInfo.strMeal}</h1>
        <p>ingredients</p>
        <p>Region: ${foodInfo.strArea}</p>
        <ul>
            <li>${foodInfo.strIngredient1}</li>
            <li>${foodInfo.strIngredient2}</li>
            <li>${foodInfo.strIngredient3}</li>
            <li>${foodInfo.strIngredient4}</li>
            <li>${foodInfo.strIngredient5}</li>
            <li>${foodInfo.strIngredient6}</li>
            <li>${foodInfo.strIngredient7}</li>
            <li>${foodInfo.strIngredient8}</li>
            <li>${foodInfo.strIngredient9}</li>
            <li>${foodInfo.strIngredient10}</li>
        </ul>
    `
    }else{
        console.log("nosn")
    }
}