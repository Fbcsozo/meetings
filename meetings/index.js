const ondeColocar = document.querySelector('.set')

let html = ''

const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",

]

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(letras)

for (let i = 0; i < letras.length; i++) {
  const letra = letras[i]
  html += `<button class="${letra} drum">${letra}</button>`
}

ondeColocar.innerHTML = html



var numberOfDrum = letras.length

for (var i=0; i<numberOfDrum; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;


    switch (buttonInnerHTML) {
      case "a":
        buttonAnimation2(buttonInnerHTML);
        var audioW =new Audio("sounds/black_horse_burger.mp3");
        audioW.play(); 
        
        break;
      
      case "b":
        buttonAnimation2(buttonInnerHTML);
        var audioA =new Audio("sounds/burgerbistro.mp3");
        audioA.play(); 
        break;
    
      case "c":
        buttonAnimation(buttonInnerHTML);
        var audioS =new Audio("sounds/casazeitePizzaria.mp4");
        audioS.play(); 
        break;
    
      case "d":
        buttonAnimation2(buttonInnerHTML);
        var audioD =new Audio("sounds/domrapha.mp3");
        audioD.play(); 
        break;
    
      case "e":
        buttonAnimation2(buttonInnerHTML);
        var audioJ =new Audio("sounds/mafuá.mp3");
        audioJ.play(); 
        break;
    
      case "f":
        buttonAnimation3(buttonInnerHTML);
        var audioK =new Audio("sounds/mexican_food.mp3");
        audioK.play(); 
        break;
    
      case "g":
        petiscoAnimation(buttonInnerHTML);
        var audioL =new Audio("sounds/pietiscos_vila_picanha.mp3");
        audioL.play(); 
        break;
                
        case "h":
          buttonAnimation(buttonInnerHTML);
        var audioH =new Audio("sounds/primepizzaria.mp3");
        audioH.play(); 
        break;

      default: console.log(buttonInnerHtml);
    }

});

function buttonAnimation(courrentkey){

var animationButton  = document.querySelector("."+courrentkey);

animationButton.classList.add("pressed");

setTimeout(function() {

  animationButton.classList.remove("pressed");
  
},5000);

}

function buttonAnimation2(courrentkey){

  var animationButton  = document.querySelector("."+courrentkey);
  
  animationButton.classList.add("burger");
  
  setTimeout(function() {
  
    animationButton.classList.remove("burger");
    
  },5000);
  
  }
    
    }
    function buttonAnimation3(courrentkey){

      var animationButton  = document.querySelector("."+courrentkey);
      
      animationButton.classList.add("mexican");
      
      setTimeout(function() {
      
        animationButton.classList.remove("mexican");
        
      },5000);
      }

      function petiscoAnimation(courrentkey){

        var animationButton  = document.querySelector("."+courrentkey);
        
        animationButton.classList.add("petisco");
        
        setTimeout(function() {
        
          animationButton.classList.remove("petisco");
          
        },5000);
        }
     




