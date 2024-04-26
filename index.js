// function connect() {
//   var searchTerm = document.getElementById("searchBox").value;
//   document.getElementById("searchBox").value = "";
//   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => display(data.meals));
// }

// function display(items) {
//   var oldContent = document.getElementById("content_holder");
//   oldContent.textContent = "";

//   for (var i = 0; i < items.length; i++) {
//     var newDiv = document.createElement("div");
//     // newDiv.innerHTML = `<div class="card mb-3" style="max-width: 1300px; margin: 0 auto">
//     //     <div class="row g-0">
//     //       <div class="col-md-4">
//     //         <img
//     //           src="${items.strMealThumb}"
//     //           class="img-fluid rounded-start"
//     //           alt="..."
//     //           style="object-fit: cover; width: 100%; height: 100%"
//     //         />
//     //       </div>
//     //       <div class="col-md-8">
//     //         <div class="card-body">
//     //           <h5 class="card-title">${items.strMeal}</h5>
//     //           <p class="card-text">${items.strInstructions}</p>
//     //           <p class="card-body">
//     //             <small class="text-body-secondary"
//     //               >Last updated 3 mins ago</small
//     //             >
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>`;
//     newDiv.innerHTML = `Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
//                          <img src="${items[i - 1].strMealThumb}"> <br>
//                          Cooking Instructions: ${
//                            items[i - 1].strInstructions
//                          } <br> <br>`;
//     oldContent.appendChild(newDiv);
//   }
// }

function connect() {
  var searchTerm = document.getElementById("searchBox").value;
  document.getElementById("searchBox").value = "";

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the data received from the API
      if (data && data.meals && data.meals.length > 0) {
        // Check if meals array exists and has items
        display(data.meals); // Pass the meals array to display function
      } else {
        console.error("No data found for the provided search term.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  console.log("OK");
}

function display(meals) {
  var oldContent = document.getElementById("content_holder");
  oldContent.innerHTML = ""; // Clear previous content

  meals.forEach((meal) => {
    var newDiv = document.createElement("div");
    newDiv.className = "card mb-3";
    newDiv.style.maxWidth = "1300px";
    newDiv.style.margin = "0 auto";

    newDiv.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="..." style="object-fit: cover; width: 100%; height: 100%">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
            <p class="card-body">
              <small class="text-body-secondary">ID:${meal.idMeal} Catagory:${strCategory}</small>
            </p>
          </div>
        </div>
      </div>`;

    oldContent.appendChild(newDiv);
  });
}
