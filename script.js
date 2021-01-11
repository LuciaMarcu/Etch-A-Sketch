const container = document.querySelector('#container');

createGrid(16);

function createGrid(size){
    setGridSize(size);
    createDivs(size);
}

function setGridSize(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}


function createDivs(size){

    for(var i = 0; i < size * size; i++){
        const divs = document.createElement('div');
        divs.classList.add('divs');    
        divs.addEventListener('mouseover', function () {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            divs.style.backgroundColor = "#" + randomColor;
        });        
        container.appendChild(divs);
    }

}

function refresh(){
    document.getElementById("container").innerHTML = "";
    var size = prompt("Please, enter the number of squares for your grid.", "");
    if (size > 100){
        alert("Pick a smaller number of grids!");
    }
    else if (size <= 1){
        alert("Pick a larger number of grids");
    }
    else createGrid(size);

}