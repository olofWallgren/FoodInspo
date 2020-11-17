window.addEventListener('load',startProgram);
let listOfVeggies = ["gurka", "banan","lök","gurka"]
let index = 0;


function startProgram(){
    addEventListeners()
    
}
function addEventListeners(){
        document.getElementById('nexItem').addEventListener('click',(event)=>{
        event.preventDefault;
        askQuestion()
        
    })
    document.getElementById('yesButton').addEventListener('click',()=>{
        handleYes()
    })
   
}
function askQuestion(){
    question = listOfVeggies[index];
    showQestion()
   
}
function next(){
    index++;
    askQuestion()
    
}
       
function showQestion(){
    document.getElementById('displayItems').innerText = question
    
}

function handleYes(){
    console.log('yea')
    next()
}