import { Useri } from './ui.js';
import {Details} from "./details.js" ; 
let type ; 

const useri = new Useri();
const details = new Details () ; 

const lists = document.querySelectorAll(".navbar .offcanvas .offcanvas-body ul li") ; 
console.log(lists)

for(let i = 0  ; i <lists.length ; i++){
    lists[i].addEventListener("click" ,function(e){
        
type = lists[i].innerHTML.toLowerCase();
      let data =   getData(type);
      useri.displayCards( data)


        
    })
    
    
}


async function getData(x="categories"){
    console.log(x)
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${x[0]}=list`);
    const data = await response.json();
      console.log(data);
      return data
    
}
// details.getData() ;

