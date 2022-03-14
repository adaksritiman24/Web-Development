var current = 1;
var currentRowIndex = 0;
var won = false;
var wrongAnimation = "wordle-wrong  0.6s ease-in-out forwards";
var wrongPosAnimation = "wordle-wrong-pos  0.6s ease-in-out forwards";
var correctAnimation = "wordle-correct-pos  0.6s ease-in-out forwards";
var winAnimation = "win-animation 0.4s forwards ease-in-out";
var disableKeys = false;
words = [
    ['K','I','T','E','S'],
    ['R','I','G','H','T'],
    ['S','E','V','E','N'],
    ['F','L','O','U','R'],
    ['B','O','O','K','S'],
    ['S','H','E','L','L'],
    ['L','I','G','H','T'],
    ['I','N','D','I','A'],
    ['C','H','I','N','A'],
    ['S','I','E','G','E'],
    ['V','I','T','A','L'],
    ['Z','E','B','R','A'],
    ['Y','E','M','E','N'],
    ['N','I','G','H','T'],
    ['M','I','G','H','T'],
    ['L','A','T','E','R'],
    ['H','A','U','N','T'],
    ['G','H','O','S','T'],
    ['G','I','R','L','S'],
    ['H','O','U','S','E'],
    ['P','U','R','S','E'],
    ['P','A','I','N','T'],
    ['X','E','R','O','X'],
    ['M','I','X','E','R'],
    ['M','U','S','I','C'],
    ['Q','U','E','E','N']
]

var correctWord = words[parseInt(Math.random()*words.length)]

console.log(correctWord);

function getRow(rowNumber){
    return document.getElementById('row-' + rowNumber);
}

const showAnimation =(animationList)=>{
    disableKeys = true
    var firstRow = getRow(current);
    console.log(firstRow.children.length);
    
    return new Promise((resolve, reject)=>{
        for (let i = 0; i < firstRow.children.length; i++) {
        
            setTimeout(() => {
                let element = firstRow.children[i];
            
                element.style.animation = animationList[i];
                
                if(i === firstRow.children.length-1){
                    setTimeout(()=>{
                        disableKeys = false
                        resolve(0);
                    }, 800);
                }
                
            }, i*400);
            
        }
        
    });
    
}
const showWinAnimation =()=>{
    var firstRow = getRow(current);
    console.log(firstRow.children.length);
    
    return new Promise((resolve, reject)=>{
        for (let i = 0; i < firstRow.children.length; i++) {
        
            setTimeout(() => {
                let element = firstRow.children[i];
                element.classList.add("box-correct");
                element.style.animation = winAnimation;
                
                if(i === firstRow.children.length-1){
                    setTimeout(()=>{
                        resolve(0);
                    }, 600);
                }
                
            }, i*100);
            
        }
        
    });
    
}


const keyPressed=(key)=>{
    var row = getRow(current);
    if(currentRowIndex < 5 && !disableKeys)
        row.children[currentRowIndex++].innerText = key;
}

const deleteBox=()=>{
    var row = getRow(current);

    if(currentRowIndex > 0 && !disableKeys){
        row.children[currentRowIndex-1].innerText = "";
        currentRowIndex --;
    }
    
}

const wordList =()=>{
    var row = getRow(current);
    let list = [];
    for (const element of row.children) {
        list.push(element.innerText);
    }
    return list;
}

const validateWord=(guessedWord)=>{
    let colorList = [];
    let totalCorrectGuesses = 0;
    for(let i = 0; i< 5; i++){
        let actual = correctWord[i];
        let guess = guessedWord[i];

        if(guess === actual){
            colorList.push(correctAnimation);
            totalCorrectGuesses += 1;
        }
        else if(correctWord.includes(guess)){
            colorList.push(wrongPosAnimation);
        }
        else
            colorList.push(wrongAnimation);
    }

    if(totalCorrectGuesses === 5) won = true;

    return colorList;
}

const enterButtonPressed = async()=>{

    if(currentRowIndex !=5 || disableKeys) return;

    var row = getRow(current);
    
    currentWordList = wordList();
    animationList = validateWord(currentWordList);
    console.log(animationList);

    showAnimation(animationList).then((value)=>{
        console.log("Resolved: ", value);
        current++;
        currentRowIndex = 0;
        colorKeyBoard(animationList, currentWordList);
        if(won){
            current--;
            showWinAnimation().then((value)=>{
              showWinBanner();
            })
        }
        else if(current === 7){
            showLostBanner();
        }
    })
    

}

const colorKeyBoard = (animationList, currentWordList)=>{
    let keys = [...document.getElementsByClassName('keyrow')[0].children, 
                ...document.getElementsByClassName('keyrow')[1].children,
                ...document.getElementsByClassName('keyrow')[2].children];

    for (let i = 0; i < currentWordList.length ; i++) {
        let key = keys.filter((key)=> key.innerText === currentWordList[i])[0];

        if(animationList[i] === correctAnimation){
            key.style.backgroundColor = "green";
        }
        else if(animationList[i] === wrongAnimation){
            key.style.backgroundColor = "rgb(10,10,10)";
        }
    }
}

const showWinBanner=()=>{
    let winBanner = document.createElement('div');
    winBanner.id = 'win'
    winBanner.innerHTML = `
        <p>You Won!</p>
        <button onclick='closeWinBanner()'> Close </button>
    `;
    winBanner.classList.add('winbanner');
    document.getElementsByTagName('body')[0].appendChild(winBanner);

}

function closeWinBanner(){
    document.getElementsByTagName('body')[0].removeChild(
        document.getElementById('win')
    )
   
}

const showLostBanner=()=>{
    let lostBanner = document.createElement('div');
    lostBanner.id = 'lost'
    let correctConstructedWord = correctWord.join("");
    lostBanner.innerHTML = `
        <p>You Lost!</p>
        <p>The correct word was '${correctConstructedWord}'</p>
        <button onclick='closeLostBanner()'> Close </button>
    `;
    lostBanner.classList.add('winbanner');
    document.getElementsByTagName('body')[0].appendChild(lostBanner);

}

function closeLostBanner(){
    document.getElementsByTagName('body')[0].removeChild(
        document.getElementById('lost')
    )
   
}