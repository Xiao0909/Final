//document.getElementById("next").style.display="none"
document.addEventListener('DOMContentLoaded', () =>{
    var linkdiv = document.getElementById("link");
    linkdiv.style.display = "none";
        //card options
        const cardArray = [
            //波克比
            {
                name:'poke1',
                img: 'images/bokebi.jpg'
            },
            {
                name:'poke1',
                img: 'images/bokebi.jpg'
            },
            //杰尼龟
            {
                name:'poke2',
                img: 'images/jieni.jpg'
            },
            {
                name:'poke2',
                img: 'images/jieni.jpg'
            },
            //胖弟弟
            {
                name:'poke3',
                img: 'images/pangding.jpg'
            },
            {
                name:'poke3',
                img: 'images/pangding.jpg'
            },
            //喷火龙
            {
                name:'poke4',
                img: 'images/penhuo.jpg'
            },
            {
                name:'poke4',
                img: 'images/penhuo.jpg'
            },
            //蒜头王八
            {
                name:'poke5',
                img: 'images/miaowa.jpg'
            },
            {
                name:'poke5',
                img: 'images/miaowa.jpg'
            },
            //伊布
            {
                name:'poke6',
                img: 'images/yibu.jpg'
            },
            {
                name:'poke6',
                img: 'images/yibu.jpg'
            }
         
        ]
        
        cardArray.sort(() => 0.5 - Math.random())
    
        const grid = document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        var cardsChosen = []
        var cardsChosenId = []
        var cardsWon = []
    
        //create your board
        function createBoard(){
            for(let i=0; i< cardArray.length; i++){
                var card = document.createElement('img')
                card.setAttribute('src', 'images/background.png')
                card.setAttribute('data-id',i)
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            }
        }
    
        //check for matches
        function checkForMatch(){
            var cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            cards[optionOneId].style.visibility = "visible";
            cards[optionTwoId].style.visibility = "visible";
            if (cardsChosen[0] === cardsChosen[1]){
                cards[optionOneId].style.visibility = "hidden";
                cards[optionTwoId].style.visibility = "hidden";
                cardsWon.push(cardsChosen)
            }else{
                cards[optionOneId].setAttribute('src', 'images/background.png')
                cards[optionTwoId].setAttribute('src', 'images/background.png')
            }
            cardsChosen = []
            cardsChosenId = []
            resultDisplay.textContent = cardsWon.length
            if(cardsWon.length === cardArray.length/2){
                // resultDisplay.textContent = 'Congradulations! you found them all!';
                //alert("yes")
                linkdiv.style.display = "block";
            }
        }
       
        //flip your card
        function flipCard(){
            var cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if(cardsChosen.length ===2){
                setTimeout(checkForMatch, 500)
            }
        }
        
        
    
        createBoard()
    })