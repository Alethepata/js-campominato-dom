const container = document.querySelector('.container');

const btn = document.getElementById('btn');

container.classList.add('d-none');

for( let r = 1; r <= 16; r++){
let  num = randomize(1, 100);
console.log(num); 
}

for( let i = 1; i <= 100; i++){
    const square = createSquare(i);

    square.addEventListener('click', function(){

        this.classList.toggle('active');

    })

    container.append(square);
}
function createSquare(index){
    const squares = document.createElement('div');

    squares.className = 'square uno';

    squares.innerHTML = `<span>${index}</span>`;

    return squares;

}

function randomize(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
   
}




btn.addEventListener('click', function(){
    container.classList.remove('d-none'); 

})





