const main = () => {
	fetch("https://restaurant-api.dicoding.dev/list")
		.then((response) => response.json())
		.then((json) => {
			const resto = json.restaurants;
			let cards = "";
			const cardContainer = document.querySelector(".card");
			resto.forEach((m) => {
				cards += showCards(m);
			});
			resto.forEach((m) => (cards += showCards(m)));
			cardContainer.innerHTML = cards;

			const card = document.querySelectorAll(".card-items");
			const desc = document.querySelectorAll(".card-text-description");
			const btnRead = document.querySelectorAll(".card-items-button");
			for (let i = 0; i < card.length; i++) {
				btnRead[i].addEventListener("click", function () {
					// btnRead[i].classList.toggle("haha");
					card[i].classList.toggle("custom-item");
					desc[i].classList.toggle("custom-item");
				});
			}
		});

	const showCards = (m) => {
		if (m.rating >= 4.8) {
			m.rating = "⭐⭐⭐⭐⭐" + `(${m.rating})`;
		} else if (m.rating >= 3.5 && m.rating <= 4.8) {
			m.rating = "⭐⭐⭐⭐" + `(${m.rating})`;
		} else if (m.rating >= 2.5 && m.rating <= 3.5) {
			m.rating = "⭐⭐⭐" + `(${m.rating})`;
		} else if (m.rating >= 1.5 && m.rating <= 2.5) {
			m.rating = "⭐⭐" + `(${m.rating})`;
		} else if (m.rating >= 1 && m.rating <= 3.5) {
			m.rating = "⭐" + `(${m.rating})`;
		}
		return /*html*/ `
  <article class="card-items">
 <img class="card-items-header" src="${m.pictureId}" alt="picture-restaurant" />
  <div class="card-items-content">
    <p class="card-text-city">${m.city}<span class="card-text-rating">${m.rating}</span></p>
    <h3 class="card-text-title">
      ${m.name}
    </h3>
    <p class="card-text-description">
    ${m.description}
    </p>
    <button class="card-items-button">Read More</button>
  </div>
  </article>
  `;
	};
};

module.exports = main;
