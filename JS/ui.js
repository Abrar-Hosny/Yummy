 const home = document.querySelector(".Home");

 let tags ; 
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

 
    
    const ingradiantsandmeassurs = meals.map(meal => ({
      measurements: meals.map(meal => ({
        measurements: Object.keys(meal)
            .filter(key => key.startsWith('strMeasure'))  
            .map(key => meal[key])                       
            .filter(value => value && value.trim() !== '') // Filter out null, undefined, and empty strings
    })),
      ingridiants :Object.keys(meal).filter(key => key.startsWith('strIngredient')).map(key => meal[key]).filter(value => value && value.trim() !== ''),
      tags : data.meals[0].strTags.split(',')
    }));

    const buttonsHTML = ingradiantsandmeassurs.map(
      meal => meal.tags.map(tag => `<button class="btn btn-success mb-2 me-1">${tag}</button>`).join('')
    ).join('');
    const ingradiantsHtml = ingradiantsandmeassurs.map(
      meal => meal.ingridiants.map(ingridiant => `<button class="btn btn-success mb-2 me-1">${ingridiant}</button>`).join('')
    ).join('');
      

    
    // const buttonsHTML = ingradiantsandmeassurs.map(
    //   meal => meal.tags.map(tag => `<button class="btn btn-success mb-2 me-1">${tag}</button>`).join('')
    // ).join('');



console.log(ingradiantsandmeassurs ,ingradiantsHtml  );





    home.innerHTML=`<section >
        <div class="d-lg-flex ms-5 ps-5 pt-2">
          <div class="w-25 h-25">
            <img src="${data.meals[0].strMealThumb}" class="w-100 object-fit-contain rounded" >
            <h1 class="fs-4 text-white ">${data.meals[0].strMeal}</h1>
          </div>

          <div class="w-75 px-5">
            <h3 class="fs-4 text-white">Instructions
            </h3>
            <p class="text-white">${data.meals[0].strInstructions}</p>
          
            <h3 class="fs-5 text-white">Area : ${data.meals[0].strArea}
            </h3>
             <h3 class="fs-5 text-white"> Category : ${data.meals[0].strCategory}
            </h3>
             <h3 class="fs-5 text-white"> Recipes :
            </h3>
            
            <div>
             ${ingradiantsHtml}
              
            </div>
            <h3 class="fs-5 text-white">Tags:
            </h3>
           
            <div class="tags">
            ${buttonsHTML}
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
