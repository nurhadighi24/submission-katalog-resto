import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../DATA.json";

console.log(data);

const listRestaurant = (data) => {
  const restElement = document.querySelector("#listRestaurant");
  restElement.innerHTML = "";
  data.forEach((resto) => {
    const { name, description, pictureId, city, rating } = resto;
    const listResto = document.createElement("div");

    listResto.innerHTML = `
    <div class="container">
      <article class="post-item">
          <img class="post-item__thumbnail"
              src="${pictureId}" alt="${name} restaurant">
          <div class="post-item__content">
              <h2 class"post-item__title"><a href="#">${name}</a></h2>
              
              <P class="post-item__city">${city}</p>
              <P class="post-item__rating">${rating}</p>
          </div>
      </article>
    </div>    
          `;

    restElement.appendChild(listResto);
  });
};
listRestaurant(data.restaurants);

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
