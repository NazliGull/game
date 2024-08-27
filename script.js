const guessbtn = document.querySelector(".guess-btn");
const inputValue = document.querySelector(".number");

let icon= document.getElementsByClassName("fa-solid");
let heart=3;


const randomValue = Math.floor(Math.random() * 10);

const guess = () => {

if(+inputValue.value===randomValue){
    alert('Tebrikler Bildiniz');
    window.location.reload();
}
 else{
    console.log(inputValue.value)
    icon[heart-1].style.display="none";
    heart--;
    console.log(randomValue)
}if(heart===0){

    guessbtn.textContent= "Tekrar Oynayınız"
   guessbtn.addEventListener('click', () => {
        
        window.location.reload();
  
  
    
         })

     }  }


guessbtn.addEventListener("click",guess);
