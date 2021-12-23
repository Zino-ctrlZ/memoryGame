document.addEventListener('DOMContentLoaded', () =>{


    const cardArray = [
        {
            name: 'fries', 
            img: 'images/fries.png'
        },
        {
            name: 'fries', 
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger', 
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger', 
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog', 
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog', 
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream', 
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream', 
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake', 
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake', 
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza', 
            img: 'images/pizza.png'
        },
        {
            name: 'pizza', 
            img: 'images/pizza.png'
        },
    ]

    //randomize card array 
    cardArray.sort( () => 0.5 - Math.random())

    //set grid and box variables  using querySelector() 
    const grid = document.querySelector('.grid')
    const box = document.getElementById('box')


    var resultDisplay = document.querySelector('#score')
    var outCome = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = [] 

    function createBoard() {
        for(let i = 0; i < cardArray.length ; i++){
            var card = document.createElement('img'); 
            card.setAttribute('src', 'images/blank.png'); 
            card.setAttribute('data-id', i); 
            card.addEventListener('click', flipcard);
            grid.appendChild(card); 
        }
    }

    //pop up message
    function pop (result) {          
        if(result === 'correct'){
            
            outCome.textContent = 'Correct!' 
        }
        else{
            outCome.textContent = 'wrong!'
        }
    }

    


    //check for match 
    function checkForMatch () {
        var cards = document.querySelectorAll('img')
        
        const optionOne = cardsChosenID[0] 
        const optionTwo = cardsChosenID[1]

        box.setAttribute('display', 'inline-block')
        if(cardsChosen[0] === cardsChosen[1]){
           
            pop('correct')
            cards[optionOne].setAttribute('src', 'images/white.png') 
            cards[optionTwo].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            pop('wrong')
            cards[optionOne].setAttribute('src', 'images/blank.png')
            cards[optionTwo].setAttribute('src', 'images/blank.png')
        }
        box.setAttribute('display', 'none')

        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = `Score ${cardsWon.length}`

        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations, good memory!'
        }
    }


    //flipcard function 
    /**
     * what you're actually doing here is putting the card chosen id in an array that 
     * will compare the two cards picked in checkForMatch function
     */
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenID.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard(); 

})

function newFunction(box) {
    box.setAttribute('display', 'inline-block')
}
