const cars = [
  {
    name: "Toyota Corolla 2019",
    prices: {
      one: "25",
      two: "25",
      three: "30",
      for: "40",
    },
    image: "/images/00a4a39c.png",
  },
  {
    name: "Toyota Corolla 2020",
    prices: {
      one: "25",
      two: "25",
      three: "30",
      for: "40",
    },
    image: "/images/2164ad95.png",
  },
  {
    name: "Toyota Corolla 2021",
    prices: {
      one: "115",
      two: "115",
      three: "120",
      for: "200",
    },
    image: "/images/8d7e6d54.png",
  },
  {
    name: "Toyota Corolla 2018",
    prices: {
      one: "250",
      two: "250",
      three: "300",
      for: "400",
    },
    image: "/images/a442a0b5.png",
  },
];

RenderCards(cars);

function RenderCards(arr) {
  let containerCard = document.getElementsByClassName("rent_car_container");
  let str = ``;

  for (let i = 0; i < arr.length; i++) {
    str += `<div class="rent_card">
    <div class="rent_card_title_image">
      <p>${arr[i].name}</p>
    </div>
    <img class="rent_card_image" src=${arr[i].image} width="220" height="120" alt="Smille">
    <div class="rent_content_list">
      <div class="list_container">
        <img class="rent_list_svg" src="/images/fuel.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">Бензин</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="/images/transmission.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">Автомат</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="/images/seat.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">5 сидений</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="/images/car.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">1,6 л. (122 л.с)</p>
      </div>
    </div>
    <div class="rent_card_prices">
      <div class="rent_card_tile">
        <p class="rent_card_day">1-2 суток</p>
        <p class="rent_card_price">$<span class="price">${arr[i].prices.one}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">3-10 суток</p>
        <p class="rent_card_price">$<span>${arr[i].prices.two}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">11-20 суток</p>
        <p class="rent_card_price">$<span>${arr[i].prices.three}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">20 + суток</p>
        <p class="rent_card_price">$<span>${arr[i].prices.for}</span></p>
      </div>
    </div>

    <button type="button" class="rent_card_confirm">Оренда</button>
  </div>`;
  }

  return (containerCard[0].innerHTML = str);
}

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

// class Car {
//   render() {
//     const containerCard = document.getElementsByClassName("rent_car_container");
//     let str = ``;

//     for (let i = 0; i < cars.length; i++) {
//       str += `<div class="rent_card">
//     <div class="rent_card_title_image">
//       <p>${cars[i].name}</p>
//     </div>
//     <img class="rent_card_image" src="/images/00a4a39c.png" width="220" height="120" alt="Smille">
//     <div class="rent_content_list">
//       <div class="list_container">
//         <img class="rent_list_svg" src="/images/fuel.svg" width="28" height="28" alt="Benz">
//         <p class="rent_list_title">Бензин</p>
//       </div>
//       <div class="list_container">
//         <img class="rent_list_svg" src="/images/transmission.svg" width="28" height="28" alt="Benz">
//         <p class="rent_list_title">Автомат</p>
//       </div>
//       <div class="list_container">
//         <img class="rent_list_svg" src="/images/seat.svg" width="28" height="28" alt="Benz">
//         <p class="rent_list_title">5 сидений</p>
//       </div>
//       <div class="list_container">
//         <img class="rent_list_svg" src="/images/car.svg" width="28" height="28" alt="Benz">
//         <p class="rent_list_title">1,6 л. (122 л.с)</p>
//       </div>
//     </div>
//     <div class="rent_card_prices">
//       <div class="rent_card_tile">
//         <p class="rent_card_day">1-2 суток</p>
//         <p class="rent_card_price">$<span class="price">25</span></p>
//       </div>
//       <div class="rent_card_tile">
//         <p class="rent_card_day">3-10 суток</p>
//         <p class="rent_card_price">$<span>25</span></p>
//       </div>
//       <div class="rent_card_tile">
//         <p class="rent_card_day">11-20 суток</p>
//         <p class="rent_card_price">$<span>25</span></p>
//       </div>
//       <div class="rent_card_tile">
//         <p class="rent_card_day">20 + суток</p>
//         <p class="rent_card_price">$<span>25</span></p>
//       </div>
//     </div>

//     <button type="button" class="rent_card_confirm">Оренда</button>
//   </div>`;
//     }

//     containerCard[0].innerHTML = str;
//   }
// }

// const car = new Car();
// car.render();
