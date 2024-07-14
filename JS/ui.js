 const home = document.querySelector(".Home");

export class Useri {
  displayCards() {
    console.log("hello");
    home.innerHTML = ` <div class="card">
          <img src="Where-to-Eat-the-Best-Sushi-in-Seattle.jpg" alt="" class="card-img">

    <div class="card-body">
      <h1 class="card-title">Hello</h1>
    </div>
            </div>`;
  }

  displayWithDetails(data) {
    let meals = data.meals ;

    const extractMeasurements = (meal) => {
      return Object.keys(meal)
        .filter(key => key.startsWith('strMeasure') && meal[key])  // Filter out keys that start with 'strMeasure' and are not empty
        .map(key => meal[key]);  // Map the filtered keys to their values
    };
    
    const measurementsArray = meals.map(meal => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      measurements: extractMeasurements(meal)
    }));

console.log(measurementsArray);





    home.innerHTML=`<section>
        <div class="d-lg-flex">
          <div class="w-25 h-100 ">
            <img src="${data.meals[0].strMealThumb}" class="w-100 object-fit-contain" >
            <h1 class="fs-1 text-white ">${data.meals[0].strMeal}</h1>
          </div>

          <div class="w-75 px-5">
            <h3 class="fs-1 text-white">Instructions
            </h3>
            <p class="text-white">${data.meals[0].strInstructions}</p>
          
            <h3 class="fs-1 text-white">Area : ${data.meals[0].strArea}
            </h3>
             <h3 class="fs-1 text-white"> Category : ${data.meals[0].strCategory}
            </h3>
             <h3 class="fs-1 text-white"> Recipes :
            </h3>
            
            <div>
              <button class="btn btn-success">${data.meals[0].strInstructions}</button>
              
            </div>
            <h3 class="fs-1 text-white">Tags:
            </h3>
           
            <div>
              <button class="btn btn-danger">${data.meals[0].strTags} </button>

            </div>

            <div>
              
              <a class="btn btn-success">Source </a>
              <a href="${data.meals[0].strYoutube}" class="btn btn-danger">Youtube </a>

            </div>
           
          </div>
        </div>
       </section>`
  }
}
