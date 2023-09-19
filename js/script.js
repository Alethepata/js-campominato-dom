const container = document.querySelector('.container');

const btn = document.getElementById('btn');

container.classList.add('d-none');

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
btn.addEventListener('click', function(){
    container.classList.remove('d-none'); 

})   




