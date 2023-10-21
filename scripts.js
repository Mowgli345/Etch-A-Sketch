const container = document.getElementById("container");

const gridButton = document.querySelector(".grid-change-btn");

gridButton.addEventListener("click",changeGrid);

drawGrid();

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

function changeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    col = prompt("How many squares?");
    drawGrid(col);
    }


function colorGrid() {
    const gridSquare = document.querySelectorAll(".grid-square");
    gridSquare.forEach((square)=> {
        square.addEventListener("mouseover", square =>{
            let colorSquare = square.target;

            let myColor = window.getComputedStyle(colorSquare).backgroundColor;
            colorSquare.style.backgroundColor=myColor; 
            var rgb = myColor.match(/[0-9]+/);

            if (rgb>50) {
            myColor=`rgb(${rgb-40}, ${rgb-40}, ${rgb-40})`;
            colorSquare.style.backgroundColor=myColor; 
                }
            else {
                rgb=0;
                myColor=`rgb(${rgb}, ${rgb}, ${rgb})`;
                colorSquare.style.backgroundColor=myColor; 
                } 
            });
        }); 
}