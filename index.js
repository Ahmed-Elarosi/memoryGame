document.addEventListener("DOMContentLoaded", () => {
  //Card options
  const cardArray = [
    {
      name: "one",
      img: "images/img-1.jpeg",
    },

    {
      name: "two",
      img: "images/img-2.jpeg",
    },

    {
      name: "three",
      img: "images/img-3.jpeg",
    },
    {
      name: "four",
      img: "images/img-4.jpeg",
    },

    {
      name: "five",
      img: "images/img-5.jpeg",
    },

    {
      name: "six",
      img: "images/img-6.jpeg",
    },

    {
      name: "one",
      img: "images/img-1.jpeg",
    },
    {
      name: "two",
      img: "images/img-2.jpeg",
    },
    {
      name: "three",
      img: "images/img-3.jpeg",
    },
    {
      name: "four",
      img: "images/img-4.jpeg",
    },
    {
      name: "five",
      img: "images/img-5.jpeg",
    },
    {
      name: "six",
      img: "images/img-6.jpeg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpeg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.jpeg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpeg");
      alert("Oops same image :)");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("Cool, you are doing good!");
      cards[optionOneId].setAttribute("src", "images/white.jpeg");
      cards[optionTwoId].setAttribute("src", "images/white.jpeg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpeg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpeg");
      alert("Oops! try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length * 10;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " Congratulations! You have a good memory ";
    }
  }

  //flip card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
