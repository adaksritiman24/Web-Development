var current = 1;
var currentRowIndex = 0;
var won = false;
var wrongAnimation = "wordle-wrong  1s ease-in-out forwards";
var wrongPosAnimation = "wordle-wrong-pos  1s ease-in-out forwards";
var correctAnimation = "wordle-correct-pos  1s ease-in-out forwards";


var correctWord = ['V', 'I', 'T', 'A', 'L'];

function getRow(rowNumber){
    return document.getElementById('row-' + rowNumber);
}

const showAnimation =(animationList)=>{
    var firstRow = getRow(current);
    console.log(firstRow.children.length);
    
    return new Promise((resolve, reject)=>{
        for (let i = 0; i < firstRow.children.length; i++) {
        
            setTimeout(() => {
                let element = firstRow.children[i];
            
                element.style.animation = animationList[i];
                
                if(i === firstRow.children.length-1){
                    setTimeout(()=>{
                        resolve(0);
                    }, 1000);
                }
                
            }, i*500);
            
        }
        
    });
    
}

const keyPressed=(key)=>{
    var row = getRow(current);
    if(currentRowIndex < 5)
        row.children[currentRowIndex++].innerText = key;
}

const deleteBox=()=>{
    var row = getRow(current);
    if(currentRowIndex > 0){
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

    if(currentRowIndex !=5) return;

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
            showWinBanner();
        }
    })
    

}

const colorKeyBoard = (animationList, currentWordList)=>{
    let keys = [...document.getElementsByClassName('keyrow')[0].children, 
                ...document.getElementsByClassName('keyrow')[1].children,
                ...document.getElementsByClassName('keyrow')[2].children];

    for (let i = 0; i < currentWordList.length ; i++) {
        let key = keys.filter((key)=> key.innerText === currentWordList[i])[0];
        console.log(key);
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