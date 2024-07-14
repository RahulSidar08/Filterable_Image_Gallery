// select filterable buttons

const filterButton = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards");
const cards = document.querySelectorAll(".card")

console.log(filterButton);
console.log(filterableCards);

console.log(filterButton, filterableCards);

// filterFunction
const filterCards = (e) => {
  e.preventDefault();

  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  console.log(e.target);
  // iterate over filter cards

  cards.forEach(card => {
    card.classList.add("hide");
    // check if the card matches the selected filter or all is selectedn
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
        card.classList.remove("hide");
    {

    }
  });
};

// filter buttons
filterButton.forEach((button) => {
  button.addEventListener("click", filterCards);
});
