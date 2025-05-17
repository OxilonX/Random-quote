const button = document.querySelector("button");
const quotesContainer = document.querySelector(".both-quote");
const quote = document.querySelectorAll(".quote-card");
button.onclick = () => {
  i = Math.floor(Math.random() * quote.length);

  quote.forEach((e, i) => {
    e.classList.remove("open");
  });
  quote[i].classList.add(`js-quote-${i.toString()}`);
  quote[i].classList.add(`open`);

  quotesContainer.innerHTML = quote[i].innerHTML;
};
