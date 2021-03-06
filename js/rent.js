class CarService {
  constructor() {

  }

  async fetchCars(params) {
    const res = await fetch("http://127.0.0.1:4000/api/cars")
    const data = await res.json().then(res => res.cars)

    this.renderCars(data)
  }

  renderCars(array) {
    let containerCard = document.getElementsByClassName("rent_car_container");
    let str = ``;

    array.map(({ title, image, price }) => {
      const { href } = new URL(`blob:${image?.filename}`)

      str += `<div class="rent_card">
    <div class="rent_card_title_image">
      <p>${title}</p>
    </div>
    <img class="rent_card_image" src=${href} width="220" height="120" alt="Smille">
    <div class="rent_content_list">
      <div class="list_container">
        <img class="rent_list_svg" src="../images/fuel.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">Бензин</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="../images/transmission.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">Автомат</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="../images/seat.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">5 сидений</p>
      </div>
      <div class="list_container">
        <img class="rent_list_svg" src="../images/car.svg" width="28" height="28" alt="Benz">
        <p class="rent_list_title">1,6 л. (122 л.с)</p>
      </div>
    </div>
    <div class="rent_card_prices">
      <div class="rent_card_tile">
        <p class="rent_card_day">1-2 суток</p>
        <p class="rent_card_price">$<span class="price">${price?.one}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">3-10 суток</p>
        <p class="rent_card_price">$<span>${price?.two}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">11-20 суток</p>
        <p class="rent_card_price">$<span>${price?.third}</span></p>
      </div>
      <div class="rent_card_tile">
        <p class="rent_card_day">20 + суток</p>
        <p class="rent_card_price">$<span>${price?.fourth}</span></p>
      </div>
    </div>

    <button type="button" class="rent_card_confirm">Оренда</button>
  </div>`
    })

    console.log(array); 
    return (containerCard[0].innerHTML = str);
  }
}

console.log(window.location);
const carService = new CarService()

document.addEventListener("DOMContentLoaded", () => {
  carService.fetchCars()
})

