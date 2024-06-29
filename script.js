

let img = document.getElementById("clk-Img")
let checkBtn= document.getElementById("checkValue")

let body = document.getElementById("body")

function chnageImage(color){

     switch(color){
         
    case 'orange':
        img.src=`images/orange.png`
        break;

    case 'white':
        img.src=`images/white.png`
    break; 

    case 'skin':
        img.src=`images/skin.png`
    break;

  case 'green':
     img.src='images/green.png'
     break;
    
    default:
        break;


         
     }

}

checkBtn.addEventListener('click',function(e){

     if(checkBtn.checked){
        body.classList.remove("white-theam")
        body.classList.add("black-theam")
     }else{
        body.classList.remove("black-theam")
        body.classList.add("white-theam")
     }
})


