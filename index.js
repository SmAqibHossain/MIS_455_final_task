// function connect() {
//   var searchTerm = document.getElementById("searchBox").value;
//   document.getElementById("searchBox").value = "";
//   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
//   console.log("OKKKK");

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data.meals));
//   // .then((data) => display(data.meals));
// }
var name;
function connect() {
  var searchTerm = document.getElementById("searchBox").value;
  //   document.getElementById("searchBox").value = "";
  name = searchTerm;
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

function display(items) {
  var oldContent = document.getElementById("content_holder");
  oldContent.textContent = "";

  if (items.length > 5) {
    var oldContent = document.getElementById("content_holder");
    oldContent.textContent = "";
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `              <button
                onclick="connect_2()"
                type="button"
                class="btn btn-lg btn-success"
              >
                Show all 
              </button>`;
    oldContent.appendChild(newDiv);
  }

  for (var i = 0; i < 5; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="card mb-3" style="max-width: 1300px; margin: 0 auto">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${items[i].strMealThumb}"
              class="img-fluid rounded-start"
              alt="..."
              style="object-fit: cover; width: 100%; height: 100%"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${items[i].strMeal}</h5>
              <p class="card-text">${items[i].strInstructions}</p>
              <p class="card-body">
                <small class="text-body-secondary"
                  >ID: ${items[i].idMeal}, Catagory:${items[i].strCategory}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>`;
    // newDiv.innerHTML = `Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
    //                      <img src="${items[i - 1].strMealThumb}"> <br>
    //                      Cooking Instructions: ${
    //                        items[i - 1].strInstructions
    //                      } <br> <br>`;
    oldContent.appendChild(newDiv);
  }
}

function connect_2() {
  var searchTerm = document.getElementById("searchBox").value;
  document.getElementById("searchBox").value = "";

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the data received from the API
      if (data && data.meals && data.meals.length > 0) {
        // Check if meals array exists and has items
        display_2(data.meals); // Pass the meals array to display function
      } else {
        console.error("No data found for the provided search term.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  console.log("OK");
}

function display_2(items) {
  var oldContent = document.getElementById("content_holder");
  oldContent.textContent = "";

  if (items.length > 5) {
    var oldContent = document.getElementById("content_holder2");
    oldContent.textContent = "";
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `              <button
                onclick="connect_2()"
                type="button"
                class="btn btn-lg btn-success "
              >
                Show all 
              </button>`;
    oldContent.appendChild(newDiv);
  }

  for (var i = 0; i < items.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="card mb-3" style="max-width: 1300px; margin: 0 auto">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${items[i].strMealThumb}"
              class="img-fluid rounded-start"
              alt="..."
              style="object-fit: cover; width: 100%; height: 100%"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${items[i].strMeal}</h5>
              <p class="card-text">${items[i].strInstructions}</p>
              <p class="card-body">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>`;
    // newDiv.innerHTML = `Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
    //                      <img src="${items[i - 1].strMealThumb}"> <br>
    //                      Cooking Instructions: ${
    //                        items[i - 1].strInstructions
    //                      } <br> <br>`;
    oldContent.appendChild(newDiv);
  }
}
// function connect() {
//   var searchTerm = document.getElementById("searchBox").value;
//   document.getElementById("searchBox").value = "";
//   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => display(data.meals));
// }

// function display(items) {
//   var oldContent = document.getElementById("content_holder");
//   oldContent.textContent = "";
//   for (var i = 1; i < items.length; i++) {
//     var newDiv = document.createElement("div");
//     newDiv.innerHTML = `Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
//                          <img src="${items[i - 1].strMealThumb}"> <br>
//                          Cooking Instructions: ${
//                            items[i - 1].strInstructions
//                          } <br> <br>`;

//     oldContent.appendChild(newDiv);
//   }
// }
