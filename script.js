window.addEventListener('load',startProgram);
let listOfVeggies = ["gurka", "banan","lök","gurka"]

function startProgram(){
    addEventListeners()
}
function addEventListeners(){
        document.getElementById('nexItem').addEventListener('click',(event)=>{
        event.preventDefault;
        testFunction()
    })
}
       
  

    function testFunction(){
        const currentItem = document.getElementById('displayItems') // Vad nu ditt element har för ID?
        
        currentItem.innerText = listOfVeggies[currentIndex];
        currentIndex++;
        console.log(listOfVeggies)
     }
        
    function testAnotherFunction(){
        if(listOfVeggies.indexOf = 0){
            
        }
    }
