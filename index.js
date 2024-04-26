function connect() {
  var searchTerm = document.getElementById("searchBox").value;
  document.getElementById("searchBox").value = "";
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.meals));
}

function display(items) {
  var oldContent = document.getElementById("content_holder");
  oldContent.textContent = "";

  for (var i = 0; i < items.length; i++) {
    var newDiv = document.createElement("div");
    // newDiv.innerHTML = `<div class="card mb-3" style="max-width: 1300px; margin: 0 auto">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img
    //           src="${items.strMealThumb}"
    //           class="img-fluid rounded-start"
    //           alt="..."
    //           style="object-fit: cover; width: 100%; height: 100%"
    //         />
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">${items.strMeal}</h5>
    //           <p class="card-text">${items.strInstructions}</p>
    //           <p class="card-body">
    //             <small class="text-body-secondary"
    //               >Last updated 3 mins ago</small
    //             >
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`;
    newDiv.innerHTML = `Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
                         <img src="${items[i - 1].strMealThumb}"> <br>
                         Cooking Instructions: ${
                           items[i - 1].strInstructions
                         } <br> <br>`;
    oldContent.appendChild(newDiv);
  }
}
