const cardArray = [
    {
        name: 'Pet 1',
        img: './images/dog1.jpg',
    },
    {
        name: 'Pet 2',
        img: './images/dog2.jpg',
    },
    {
        name: 'Pet 3',
        img: './images/dog3.jpg',
    },
    {
        name: 'Pet 4',
        img: './images/dog4.jpg',
    },
    {
        name: 'Pet 5',
        img: './images/dog5.jpg',
    },
    {
        name: 'Pet 6',
        img: './images/dog6.jpg',
    },
    {
        name: 'Pet 7',
        img: './images/dog7.jpg',
    },
    {
        name: 'Pet 8',
        img: './images/dog8.jpg',
    },
    {
        name: 'Pet 9',
        img: './images/dog9.jpg',
    },
    {
        name: 'Pet 10',
        img: './images/dog10.jpg',
    },
    {
        name: 'Pet 1',
        img: './images/dog1.jpg',
    },
    {
        name: 'Pet 2',
        img: './images/dog2.jpg',
    },
    {
        name: 'Pet 3',
        img: './images/dog3.jpg',
    },
    {
        name: 'Pet 4',
        img: './images/dog4.jpg',
    },
    {
        name: 'Pet 5',
        img: './images/dog5.jpg',
    },
    {
        name: 'Pet 6',
        img: './images/dog6.jpg',
    },
    {
        name: 'Pet 7',
        img: './images/dog7.jpg',
    },
    {
        name: 'Pet 8',
        img: './images/dog8.jpg',
    },
    {
        name: 'Pet 9',
        img: './images/dog9.jpg',
    },
    {
        name: 'Pet 10',
        img: './images/dog10.jpg',
    },
];

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cardClosed.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
};

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/card-white.jpg');
        cards[optionTwoId].setAttribute('src', './images/card-white.jpg');
        alert('You have the same images!');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', './images/card-white.jpg');
        cards[optionTwoId].setAttribute('src', './images/card-white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardsWon.push(cardsChosen);
    }else {
        cards[optionOneId].setAttribute('src', './images/cardClosed.jpg');
        cards[optionTwoId].setAttribute('src', './images/cardClosed.jpg');
        alert('Sorry try again!');
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!!!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

