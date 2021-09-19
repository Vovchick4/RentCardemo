cardsFilter(0, 1000);
function cardsFilter(fromvalue, toValue) {
  let prices = document.getElementsByClassName("price");
  let rentCard = document.getElementsByClassName("rent_card");

  if (fromvalue === 0 && toValue === 1000) {
    fromvalue = 0;
    toValue = 1000;
  }

  for (let i = 0; i < prices.length; i++) {
    if (
      prices[i].textContent >= fromvalue &&
      prices[i].textContent <= toValue
    ) {
      rentCard[i].classList.add("show");
    } else {
      rentCard[i].classList.remove("show");
    }
  }
}

let filter_btn = document.getElementsByClassName("filter_btn");

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
