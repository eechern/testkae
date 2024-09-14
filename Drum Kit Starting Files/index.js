
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click" , handleClick); 
    

}



function handleClick(){
  
   var buttonCase=this.innerHTML;
   play (buttonCase);
    console.log(buttonCase);
    animate(buttonCase);
}


document.addEventListener("keydown", function(event){
    var buttonCase= event.key;
    
    console.log(buttonCase);
    play (buttonCase);
    animate(buttonCase);

});



function play(teemo){// what is the varible name inside the function () dosnet matter as u can see as long as when the function is executed with the intended data inside the() when we reach the function we can rename it. 
                    //function play(buttonCase) same function play(teemo)
    switch (teemo) {

        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
    
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
    
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
    
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
    
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
    
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
    
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    
    
    
        default: console.log(buttonCase);
    
            break;
    }


}



function animate(buttonCase){
 var active = document.querySelector("." + buttonCase);
 active.classList.add("pressed");
 
 setTimeout(function(){
    active.classList.remove("pressed");
 

 },1000);

 
 
}
