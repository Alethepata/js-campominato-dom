const container = document.querySelector('.container');

// const btn = document.getElementById('btn');

// container.classList.add('d-none');

const bomba = [];


for( let r = 1; r <= 16; r++){
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
   console.log(square)
   
    square.addEventListener('click', function(){

        this.classList.add('active'); 

        if(this.className == 'square safe active'){
         console.log('safe');  
        }else {
            console.log('HAI PERSO')
        }
        
    })

    container.append(square);
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






