const container = document.querySelector('.container');

const inputLevel = document.getElementById('input-level');
let level = inputLevel.value;

const btn = document.getElementById('btn');

container.classList.add('d-none');


if(level == 'Easy'){
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

}else if (level == 'Medium'){
   for( let i = 1; i <= 81; i++){
    const square = createSquare(i);

    square.addEventListener('click', function(){

        this.classList.toggle('active');

    })

    container.append(square);
}

function createSquare(index){
    const squares = document.createElement('div');

    squares.className = 'square due';

    squares.innerHTML = `<span>${index}</span>`;

    return squares;

}

}else{
    for( let i = 1; i <= 49; i++){
     const square = createSquare(i);
 
     square.addEventListener('click', function(){
 
         this.classList.toggle('active');
 
     })
 
     container.append(square);
 }
  
 function createSquare(index){
    const squares = document.createElement('div');

    squares.className = 'square tre';

    squares.innerHTML = `<span>${index}</span>`;

    return squares;

}

}

btn.addEventListener('click', function(){

    container.classList.remove('d-none'); 

})






