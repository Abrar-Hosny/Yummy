import { Useri } from "./ui.js";
let useri ; 
export class Details {

    async  getData() {
        const details = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
        );
        const data = await details.json();
        console.log(data);
        console.log(data.meals[0].strTags)
        useri = new Useri () ; 
useri.displayWithDetails(data); 
      }
      
}




