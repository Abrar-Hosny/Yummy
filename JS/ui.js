 const home = document.querySelector(".Home");

// async function getData() {
//   const response = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/categories.php"
//   );
//   const data = await response.json();
//   console.log(data);
// }

// getData();

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

  displayWithDetails() {
  }
}
