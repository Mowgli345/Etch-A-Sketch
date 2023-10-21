const container = document.getElementById("container");

const gridButton = document.querySelector(".grid-change-btn");

gridButton.addEventListener("click",changeGrid);

drawGrid();


function changeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    col = prompt("How many squares?");
    console.log(`ENTERED ${col}`)
    drawGrid(col);
    }

function drawGrid(col) {
    const myRow = new DocumentFragment();
    if (col==null) {
        col=6;
    }
    const row = col;

    for (i=0; i<col; i++) {
        const myRow = document.createElement("div");
        myRow.className="grid-row";       
    
            for (j=0; j<row; j++) {
                const mySquare = document.createElement("div");
                mySquare.className="grid-square";
                myRow.append(mySquare);
                    }                
            container.appendChild(myRow);
            }
    colorGrid();
}


//CHANGE COLOR BY JS

function colorGrid() {
    const gridSquare = document.querySelectorAll(".grid-square");
    gridSquare.forEach((square)=> {
        square.addEventListener("mouseover", square =>{
            square.target.backgroundColor="red";
            console.log(square.target);

            });
        }); 
}


//CHANGES COLOUR BY CLASS

// function colorGrid() {
//     const gridSquare = document.querySelectorAll(".grid-square");
//     gridSquare.forEach((square)=> {
//         square.addEventListener("mouseover", square =>{
//             square.target.classList.add("color");
//             });
//         }); 
// }