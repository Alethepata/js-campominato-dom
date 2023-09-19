const container = document.querySelector('.container');

// const btn = document.getElementById('btn');

// container.classList.add('d-none');

const bomba = [];



for( let r = 1; r <= 16; r++){
    const num = randomize(1, 100); 
    if (!bomba.includes(num)) bomba.push(num);
    
}

console.log(bomba);  

for( let i = 1; i <= 100; i++){
    const square = createSquare(i);

    square.addEventListener('click', function(){

        this.classList.add('active');

    })

    container.append(square);
}
function createSquare(index){
    const squares = document.createElement('div');

    squares.className = 'square';

    squares.id = index;

    squares.innerHTML = `<span>${index}</span>`;

    console.log(squares);

    return squares;

}

function randomize(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
   
}




btn.addEventListener('click', function(){
    container.classList.remove('d-none'); 

})





