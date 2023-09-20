const container = document.querySelector('.container');
const end = document.querySelector('.end');
const endMessage = document.querySelector('.end-message');

const btn = document.getElementById('btn');

container.classList.add('d-none');

const bomba = [];
let points=0;
let message;


while(bomba.length < 16){
    const num = randomize(1, 100);
    if (!bomba.includes(num)) bomba.push(num);
}

for( let i = 1; i <= 100; i++){
    const square = createSquare(i);
    square.classList.add('safe');
    let s= 0;
    while(s < bomba.length){
    s++
    if(square.id == bomba[s]){
    square.classList.remove('safe'); 
    square.classList.add('bg-danger');  
    square.classList.add('danger');  
    } 
}
   
   square.addEventListener('click', endleClickSquare);

    container.append(square);
} 


function endleClickSquare(){ 
    

    this.classList.add('active');
    this.removeEventListener('click', endleClickSquare);
    if(this.className == 'square safe active'){
        
        points++;
        
        console.log(points);
        if(points === 100 - bomba.length + 1){
            console.log('HAI vinto');
            end.classList.add('effect');
            endMessage.innerHTML= 'Hai vinto';
        }
        
       }else {
        end.classList.add('effect');
        message= `Hai perso! Hai fatto ${points} punti su 100`;

    endMessage.innerHTML = message;

  }
}

function createSquare(index){

    const squares = document.createElement('div');

    squares.className = 'square';

    squares.id = index;

    return squares;

}



function randomize(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
   
}

btn.addEventListener('click', function(){
    container.classList.remove('d-none'); 

})






